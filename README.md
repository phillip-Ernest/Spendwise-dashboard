# SpendWise – Personal Budget & Expense Tracker

## Project Overview

SpendWise is a personal budget and expense tracker. The project uses HTML and CSS to create the dashboard interface and JavaScript to collect budgeting information, perform calculations, and display the results in the browser console.

The current JavaScript foundation allows the user to enter a total budget and total expenses and then calculates the remaining balance.

## JavaScript Concepts Implemented

The SpendWise project demonstrates the following JavaScript concepts:

* Variables
* Data types
* User input
* Type conversion
* Arithmetic calculations
* Functions
* Browser console output

## Variables

Variables are used to store important budgeting information.

The application uses variables for the total budget, total expenses, and remaining balance:

```javascript
let budget = 0;
let expense = 0;
let remainingBalance = 0;
```

These variables store the values that are used during the budgeting calculation.

## Data Types

The project uses numeric data for budgeting and expense calculations.

The `Number()` function is used to convert the values entered through the prompts from text into numbers:

```javascript
budget = Number(prompt("Enter your total budget:"));
expense = Number(prompt("Enter your total expenses:"));
```

This allows JavaScript to perform arithmetic calculations correctly.

## User Input

User input is collected using JavaScript `prompt()` dialogs.

The application asks the user to enter:

1. Their total budget.
2. Their total expenses.

The entered values are stored in variables for processing.

## Budget Calculations

SpendWise calculates the remaining balance by subtracting total expenses from the total budget.

The calculation is:

**Remaining Balance = Total Budget - Total Expenses**

For example:

* Total Budget = 50,000
* Total Expenses = 15,000
* Remaining Balance = 35,000

## Functions

The project uses a reusable function to organize the budget calculation:

```javascript
function calculateRemainingBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}
```

The function receives the budget and expense amounts as parameters and returns the remaining balance.

Using a function keeps the calculation logic organized and reusable.

## Displaying Results

The results are displayed in the browser console using `console.log()`.

Example output:


```text
===== SpendWise Budget Summary =====
Total Budget: 50000
Total Expenses: 15000
Remaining Balance: 35000


The output is clearly labeled so that the user can easily understand the budgeting information.

## Project Files

* `index.html` – Contains the structure of the SpendWise dashboard.
* `style.css` – Contains the visual styling, layout, responsive design, and theme.
* `script.js` – Contains the JavaScript variables, user input, calculations, function, and console output.
* `README.md` – Explains the project and the JavaScript concepts implemented.

## Technologies Used

* HTML
* CSS
* JavaScript
