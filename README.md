# Spendwise Dashboard

## Project Overview

Spendwise Dashboard is a personal budget and expense tracking application designed to help users record and organize their expenses. The application uses HTML, CSS, and JavaScript to provide an interactive interface for entering expenses and displaying them on the dashboard.

## JavaScript Features

The `script.js` file connects the expense form to the webpage using JavaScript and DOM manipulation.

### Event Listener

An event listener is used to detect when the expense form is submitted. The `submit` event triggers the JavaScript function that processes the user's expense information.

The `preventDefault()` method is used to prevent the browser from refreshing the page when the form is submitted. This allows the expense to be processed and displayed immediately on the webpage.

### Conditionals

Conditional statements are used to validate the information entered by the user. The application checks that required fields are not empty and that the expense amount is a valid number.

Conditional logic is also used to categorize expenses into different levels depending on their amount. This provides additional information about each transaction.

### Arrays

Expenses are stored as objects inside an `expenses` array. Each expense object contains information such as the expense name, amount, and category.

Using an array makes it possible to store multiple expense records and process them together.

### DOM Manipulation

DOM manipulation is used to dynamically update the webpage when a new expense is submitted.

The JavaScript code creates new list items and adds them to the expense list. This means users can see their newly submitted expenses without reloading the page.

The application uses the data stored in the `expenses` array to keep the displayed expense list synchronized with the internal data.

## Challenges Encountered

One challenge was connecting the form submission to the webpage without causing the browser to refresh. I solved this by using an event listener for the form's `submit` event together with `preventDefault()`.

Another challenge was validating user input so that empty entries and invalid expense amounts would not be added to the expense list. Conditional statements were used to handle these situations.

I also had to understand how to store each expense as an object inside an array and then use array iteration to display the stored information dynamically on the webpage.

## Future Improvements

A future improvement is to connect the expense records to the dashboard summary cards. Instead of displaying hardcoded values, the application can calculate category totals dynamically whenever a new expense is added.

The remaining balance can also be updated automatically based on the user's budget and recorded expenses. This would make the dashboard provide real-time budgeting feedback.

## Technologies Used

* HTML
* CSS
* JavaScript
* DOM Manipulation
* Event Listeners
* Arrays and Objects
* Conditional Statements
