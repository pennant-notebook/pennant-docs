# Pennant-Server Documentation

This document provides an overview of the Pennant-Server repository, which is responsible for the Node/Express webserver and DynamoDB API routes/controllers for the pennant-notebook project.

## Overview

Pennant-Server acts as the backend for the Pennant-Notebook application, handling user authentication, notebook storage, and other server-side functionalities.

## Getting Started

### Prerequisites

- An `.env` file in the project root is required, which can be set up using the provided `.env.example` as a template.

### Installation

To set up the server:

1. Clone the repository:

   ```bash
   git clone https://github.com/pennant-notebook/server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd server
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server

#### Development

- Use `npm run dev` to run the server with hot-reloading enabled for development.

#### Production

- Build the project with `npm run build` and start the server using `npm start` to run the server in production.

## API Documentation

The server provides several API endpoints, interacting with DynamoDB tables:

### DynamoDB Tables

###

### `notebookusers`

- **Partition key:** `username`
- Fields include:
  - `username` (string)
  - `hashedPassword` (string)
  - `provider` (string)
  - `userID` (UUID string)
- Providers include `google`, `github`, `username`, or `null`.

###

### `notebooks`

- **Partition key:** `docID`
- **Sort key:** `username`
- Fields include:
  - `username` (string)
  - `title` (string)
  - `docID` (UUID string)

### API Endpoints

1. `fetchUser`

   - `GET /api/user/:username`
   - Fetches a user's information.

2. `createUser`

   - `POST /api/user/:username`
   - Creates a new user.

3. `fetchNotebooks`

   - `GET /api/user/:username/notebooks`
   - Retrieves all notebooks for a user.

4. `fetchDoc`

   - `GET /api/doc/:docID/:username`
   - Fetches a specific notebook by `docID` and `username`.

5. `createDoc`

   - `POST /api/doc/:username`
   - Creates a new notebook for a user.

6. `editDocTitle`
   - `PUT /api/doc/:docID/:username`
   - Updates the title of a notebook.
   - Requires a JSON body with a `title` property.

For more detailed information, visit the [Pennant-Server GitHub repository](https://github.com/pennant-notebook/server).
