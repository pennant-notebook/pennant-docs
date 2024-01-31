# Provider Context

## Overview

The `ProviderContext` is designed to facilitate real-time collaboration in the application by managing the connection to the collaboration server, document persistence, and shared state management. It leverages `HocuspocusProvider` for WebSocket communication and `IndexeddbPersistence` for local persistence of document changes.

## Key Components

### `HocuspocusProvider`

- Establishes a WebSocket connection to the collaboration server.
- `url`: The WebSocket URL to connect to, which includes the document ID (`docID`) to ensure document-specific collaboration.
- `name`: The name of the document, typically the `docID`.
- `token`: Access token for authentication with the collaboration server, fetched from environment variables.

### `IndexeddbPersistence`

- Manages local persistence of the Yjs document using IndexedDB.
- Ensures that changes are saved locally, allowing for offline editing and automatic synchronization upon reconnection.

### `YMap` for Notebook Metadata

- A Yjs Map (`YMap`) named `metaData` is used to store and synchronize notebook metadata across clients.
- Metadata includes properties like `executionCount`, which tracks the number of times code cells have been executed.

## Functions

### `initializeProvider`

Initializes the collaboration provider and returns a context value containing the provider and related properties.

```javascript
export const initializeProvider = (docID: string) => {
  const provider = new HocuspocusProvider({
    url: `${import.meta.env.VITE_WEBSOCKET_SERVER}/collab/${docID}`,
    name: docID,
    token: import.meta.env.VITE_HP_ACCESS_TOKEN
  });

  const doc = provider.document;
  const persistence = new IndexeddbPersistence(docID, doc);
  const notebookMetadata = doc.getMap('metaData');

  persistence.on('synced', () => {
    console.log('🔮 Provider + IndexedDB Synced 🔮');
    if ((provider.document.get('metaData') as YMap).get('executionCount') === undefined) {
      notebookMetadata.set('executionCount', 0);
    }
  });

  const contextValue = {
    notebookMetadata,
    docID,
    doc,
    provider,
    awareness: provider.awareness
  };

  return contextValue;
};
```

### `useProvider`

A custom hook that memoizes and returns the provider initialized with a given `docID`.

```javascript
export const useProvider = (docID: string) => {
  const provider = useMemo(() => initializeProvider(docID), [docID]);
  return provider;
};
```

### `ProviderContext`

A React context for the provider, allowing components within your application to access the provider and its associated data.

```javascript
export const ProviderContext = (createContext < ProviderContextType) | (null > null);
```

### `useProviderContext`

A custom hook for consuming the ProviderContext within the component tree. It simplifies the process of accessing the provider and its data from any component.

```javascript
const useProviderContext = () => useContext(ProviderContext);
export default useProviderContext;
```

## Usage

To use the `ProviderContext`, wrap your component tree with the `ProviderContext.Provider` and pass the context value obtained from `useProvider`. This allows any child component within the tree to access the collaboration provider and its associated properties by calling `useProviderContext()`.

## Conclusion

- The `ProviderContext` and its associated hooks and functions provide the foundation for all collaborative features in the application.
- It manages the connection to the collaboration server, document persistence, shared state, and enables real-time collaboration across clients.
