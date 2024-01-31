# MarkdownCell Component

## Overview

The `MarkdownCell` component is a specialized part of our notebook interface, designed specifically for editing and displaying markdown content. It integrates seamlessly with the `@blocknote/core` and `@blocknote/react` libraries to offer a rich markdown editing experience, complete with real-time collaboration features.

## Key Functionalities

### Markdown Editing:

- Leverages `@blocknote/react` for an enhanced markdown editing experience.
- Supports standard markdown features and custom extensions for a wide range of content types.

### Real-Time Collaboration:

- Utilizes the `provider` and `awareness` API from Yjs for collaborative editing, allowing multiple users to edit the same markdown document simultaneously.
- Displays awareness information, such as cursor positions and selections, of other users in real-time.

### Customization and Theming:

- Adapts to light and dark themes, with styling applied based on the application's current theme.
- Allows for custom block types and slash commands through the `@blocknote/core` schema customization.

### Responsive UI:

- Includes a dedicated toolbar (`MarkdownToolbar`) for markdown-specific actions and formatting.
- Designed with a responsive layout to accommodate various screen sizes and user interactions.

## Example Usage

```jsx
<MarkdownCell id='uniqueMarkdownCellId' cell={cellData} />
```

- `id`: A unique identifier for the markdown cell.
- `cell`: An object containing cell-specific data, such as the markdown content.

## Implementation Details

- The component uses React hooks (`useEffect`, `useRef`) for managing lifecycle events and references.
- Integrates `MarkdownEditor` for the actual markdown editing interface and `MarkdownToolbar` for editing tools.
- Applies custom styling from CSS modules, with dynamic class names that adapt to the current theme.

## `MarkdownEditor` Function

This function component initializes and renders the markdown editor with the following customizations:

- **Custom Block Schema**: Extends the default block schema from @blocknote/core to include custom block types, such as alerts.
- **Slash Menu Items**: Adds custom slash commands for inserting images and custom alert blocks.
- **Collaboration Settings**: Configures the editor for real-time collaboration, including user awareness settings like name and color.
- **Editor Ready Callback**: Implements custom logic to clean up or modify the editor's content upon initialization.

## Custom Block Types

- **Alert Block**: Demonstrates how to extend the markdown editor with custom block types, providing users with additional content elements.

## Theming

- The editor's appearance is customized through CSS modules, with support for light and dark themes to ensure consistency with the overall application design.
