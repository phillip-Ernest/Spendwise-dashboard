# SpendWise Dashboard Shell

## Project Overview

SpendWise is a responsive personal finance dashboard interface designed as the foundation for a future budget and expense tracking application.

This week's project focuses on creating the visual dashboard structure using HTML and modern CSS techniques. No JavaScript functionality has been added.

## Dashboard Features

The dashboard contains:

* A sidebar navigation menu
* A dashboard header
* Six financial category cards
* Responsive layout for smaller screens
* Hover and keyboard focus micro-interactions
* CSS custom properties for the application theme
* Optional dark theme support

## Financial Categories

The dashboard currently displays static information for:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

## CSS Techniques Used

### CSS Grid

CSS Grid is used to create the overall dashboard layout and arrange the financial cards.

### Flexbox

Flexbox is used for:

* Sidebar navigation
* Header layout
* Profile section
* Dashboard card content

### CSS Custom Properties

The color palette is defined using variables in the `:root` selector, including brand, accent, surface, background, primary text, and secondary text colors.

### Responsive Design

A media query is used to change the dashboard to a single-column layout below 768px.

The responsive layout was tested using the browser's DevTools Device Toolbar.

### Micro-interactions

Dashboard cards include hover and keyboard focus effects using `transform` and `box-shadow`. The transition duration is 200ms.

## Files

### index.html

Contains the structure and static content of the SpendWise dashboard.

### style.css

Contains the complete styling, layout, responsive design, theme variables, and card micro-interactions.

### README.md

Provides information about the project, its features, and the technologies used.

## Technologies

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Custom Properties
* Responsive Design
