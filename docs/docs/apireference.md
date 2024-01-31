# API Reference for Pennant Notebook

The Pennant Notebook API interfaces with DynamoDB to manage users and notebooks. Below is a detailed overview of the API endpoints and the database structure.

## DynamoDB Tables

### notebookusers Table

- **Fields:**
  - `username` (string) - Partition key
  - `hashedPassword` (string)
  - `provider` (string) - Options: google, github, username, or null
  - `userID` (UUID string)
- **Description:** Stores user information. The `provider` field is used in the authentication flow.

### notebooks Table

- **Fields:**
  - `username` (string) - Sort key
  - `title` (string)
  - `docID` (UUID string) - Partition key
- **Description:** Stores information about notebooks created by users.

## API Endpoints

1. **fetchUser**

   - **Endpoint:** GET `/api/user/:username`
   - **Description:** Fetches a user from the `notebookusers` table.

2. **createUser**

   - **Endpoint:** POST `/api/user/:username`
   - **Description:** Creates a new user in the `notebookusers` table.

3. **fetchNotebooks**

   - **Endpoint:** GET `/api/user/:username/notebooks`
   - **Description:** Fetches all notebooks for a given user from the `notebooks` table.

4. **fetchDoc**

   - **Endpoint:** GET `/api/doc/:docID/:username`
   - **Description:** Fetches a notebook with a given `docID` and `username` from the `notebooks` table.

5. **createDoc**

   - **Endpoint:** POST `/api/doc/:username`
   - **Description:** Creates a new notebook for a given `username` in the `notebooks` table.

6. **editDocTitle**
   - **Endpoint:** PUT `/api/doc/:docID/:username`
   - **Description:** Edits the title for a notebook for a given `docID` in the `notebooks` table.
   - **Request Body:** Expects a JSON object containing the new title as a `title` property (e.g., `{ "title": "New Title Here" }`).

For more details and advanced usage, please refer to the [Server GitHub Repo](https://github.com/pennant-notebook/server).

---
