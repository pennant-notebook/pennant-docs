# Dredd Code Exeuction Engine

The "Dredd" service is the name of Pennant's code execution engine. The interactions cater to both JavaScript and Python execution environments, with their APIs hosted in the `pennant-engine` and `pennant-flask-server` repositories respectively.

## Overview

The utility file contains functions to submit code for execution, check execution status, and manage execution contexts. It supports interactions with two different backends, one for JavaScript (`pennant-engine`) and another for Python (`pennant-flask-server`).

## Utility Functions

### sendToDredd

Sends a single code cell to Dredd for execution.

```javascript
export const sendToDredd = async (language: string, notebookId: string, cellId: string, code: string): Promise<string> => { ... };
```

### sendManyToDredd

Sends multiple code cells to Dredd for execution.

```javascript
export const sendManyToDredd = async (notebookId: string, cells: Cell[], lang: string): Promise<string> => { ... };
```

### checkDreddStatus

Polls the Dredd server to check the status of an execution.

```javascript
export const checkDreddStatus = async (token: string, lang: string): Promise<any> => { ... };
```

### resetContext

Resets the execution context on the Dredd server for a given notebook.

```javascript
export const resetContext = async (notebookId: string, lang: string) => { ... };
```

### formatCellsForDredd

Formats cells for submission to Dredd.

```javascript
export const formatCellsForDredd = (codeCells: YMap[]): DreddCell[] => { ... };
```

### updateMetadata

Updates metadata associated with the execution of a cell.

```javascript
export const updateMetadata = (cellMetadata: YMap, notebookMetadata: YMap): void => { ... };
```

### handleDredd

Handles the process of sending a cell to Dredd, checking status, and retrieving results.

```javascript
export const handleDredd = async (language: string, docID: string, cellId: string, editorContent: string): Promise<DreddResponse> => { ... };
```

### handleResetContext

Resets the execution context and updates metadata for all cells.

```javascript
export const handleResetContext = async (docID: string, notebookMetadata: YMap, codeCells: YMap[]): Promise<void> => { ... };
```

### handleRunAllCode

Executes all code cells in a notebook and updates their output and metadata.

```javascript
export const handleRunAllCode = async (docID: string, codeCells: YMap[], notebookMetadata: YMap): Promise<void> => { ... };
```

## Dependencies

- Axios for HTTP requests.
- Yjs types (`YMap`) for managing collaborative document state.

## Usage

These utility functions are designed for use in a collaborative notebook application. They provide the necessary functionality to execute code in real-time, either in JavaScript or Python, and manage the results and state of the execution within the collaborative session.

## Note

For more detailed information about the code execution APIs, refer to the `pennant-engine` repository for JavaScript execution and the `pennant-flask-server` repository for Python execution.

### GitHub Repositores for the Node Engine and Flask Server

- [pennant-engine](https://github.com/pennant-notebook/pennant-engine)
- [flask-server](https://github.com/pennant-notebook/pennant-engine/tree/main/flask-server)
