# Dynamic Side Menu Component

This repository contains a React component that renders a dynamic and expandable side-menu-like list of items.

https://github.com/priyab028/dynamic-sidemenu/blob/master/dynamic-sidemenu.gif

## Getting Started

To use the component, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/priyab028/dynamic-sidemenu
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the component in action.

## Usage

To use the component in your own project, follow these steps:

1. Copy the `SideMenu.js` file from the `src/components` directory in this repository into your project.

2. Import the `SideMenu` component into your own component file:

   ```jsx
   import React from 'react';
   import SideMenu from './path/to/SideMenu';
   ```

3. Define the menu configuration:

   ```jsx
   const menuConfig = [
     {
       title: 'Home',
     },
     {
       title: 'Services',
       subItems: ['Cooking', 'Cleaning'],
     },
     {
       title: 'Contact',
       subItems: ['Phone', 'Mail'],
     }
   ];
   ```

4. Render the `SideMenu` component with the `menuConfig` prop:

   ```jsx
   const App = () => {
     return (
       <div>
         <h1>My App</h1>
         <SideMenu menuConfig={menuConfig} />
       </div>
     );
   }
   ```

## Component Requirements

The `SideMenu` component has the following requirements:

1. The outermost tag of the component should be a `div` with a class of `menu-wrapper`.

2. The component receives a prop named `menuConfig` which contains the configuration of the side menu data. The `menuConfig` should be an array of objects, where each object represents a menu item. Each menu item object should have a `title` property and an optional `subItems` property.

3. Every menu item should be displayed inside a separate corresponding `div`. The `div` should have a dynamically created attribute `data-test-id` in the form: `first-level-[lowercase-title-name-here]`. For example, if a menu item contains a title named "Home", the `div` should have a `data-test-id` attribute containing `first-level-home`.

4. Every menu item `div` should contain the following:

   - Title: The text of the `div` should be the title of the menu item.

   - Button: A button should be displayed when there are subItems for the menu item. The button should have a dynamic `data-test-id` in the form: `button-{lowercase-title-name-here}` (e.g., `button-home`). The button text should be "Expand" when the menu is not expanded, and "Hide" when the menu is expanded. Clicking the button should toggle the visibility of the submenu.

   - Submenu: If the menu item has subItems, an unordered list (`ul`) should be displayed. The `ul` tag should have a `data-test-id` in the form: `ul-{lowercase-title-name-here}` (e.g., `ul-home`). Inside the `ul`, there should be `li` tags for each subItem. Each `li` tag should have a `data-test-id` in the form: `li-{lowercase-title-name-here}-{lowercase-subitem-name-here}` (e.g., `li-home-main`). The text inside each `li` tag should be the subItem name.

5. Only one submenu should be in the expanded state at any time. If a submenu is already expanded and a different menu item button is clicked, the previously expanded submenu should be hidden, and the new one should appear.

6. If a menu item has no subItems (undefined `subItems` property or an empty array), no `ul` list should be displayed, and the button should not be available.

7. The component should not use CSS properties to control element visibility. Tests will rely on the presence or absence of elements in the DOM.



