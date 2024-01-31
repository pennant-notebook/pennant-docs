# Dashboard Wrapper

This document provides detailed information about the `DashboardWrapper` component, a React component used for managing the main dashboard of a notebook application. It integrates various functionalities, including fetching notebooks, handling user authentication, and displaying notebooks.

## Component Overview

`DashboardWrapper` is a React component that serves as the main container for the dashboard of a notebook application. It is responsible for fetching and displaying user notebooks, handling user authentication and navigation, and managing the selected notebook state.

## Internal State and Effects

### State

- `isLoadingSelectedNotebook`: A boolean to track if the selected notebook is loading.
- `selectedDocId`: The currently selected document ID, managed via Recoil state.
- `isLoading`, `error`, `notebooks`, `loading`, `isError`: States related to fetching notebooks and handling errors.

### Effects

1. **Notebooks Fetching**: Fetches the list of notebooks and sets the Recoil state.
2. **Authentication Check**: Verifies user authentication and navigates to the login page if not authenticated.
3. **Provider Context Initialization**: Initializes the provider context for collaborative editing.

## Handlers

- `handleSelectedDocId`: Handles the selection of a new document ID and updates the provider's disconnected client state.

## Render Logic

- Displays a loading spinner while notebooks are being fetched.
- Shows an error message if there is an error fetching notebooks.
- Renders the `Navbar`, `LeftSidebar`, and the `Notebook` component if a notebook is selected and no errors are present.

## Dependencies

- React hooks (`useState`, `useEffect`) for managing state and lifecycle.
- `react-query` for data fetching and caching.
- `react-router` for navigation and URL parameter handling.
- `react-toastify` for displaying toast notifications.
- `recoil` for global state management.
- Custom contexts (`ProviderContext`, `NavbarContext`) and utility functions.

## Usage

The `DashboardWrapper` component is used as the main layout for the notebook application's dashboard. It manages the selection and display of notebooks, user authentication status, and provides the necessary context for the `Notebook` component.

## Note

This documentation assumes a working knowledge of React, React Query, Recoil, React Router, and React Toastify. Familiarity with these libraries is essential for effectively working with and extending the `DashboardWrapper` component.
