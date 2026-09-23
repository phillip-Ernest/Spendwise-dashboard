// SpendWise - Week 6 JavaScript

// Store expenses in an array
let expenses = [];

// Select elements from the DOM
const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const expenseMessage = document.getElementById("expense-message");

// Handle form submission
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect user input
    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Conditional validation
    if (name === "" || amount <= 0 || category === "") {
        expenseMessage.textContent =
            "Please enter valid expense information.";
        return;
    }

    // Conditional expense classification
    let expenseLevel;

    if (amount >= 10000) {
        expenseLevel = "High expense";
    } else if (amount >= 5000) {
        expenseLevel = "Medium expense";
    } else {
        expenseLevel = "Low expense";
    }

    // Store the expense in the array
    expenses.push({
        name: name,
        amount: amount,
        category: category,
        level: expenseLevel
    });

    // Update the DOM
    displayExpenses();

    // Display success message
    expenseMessage.textContent =
        `${name} was added successfully. ${expenseLevel}.`;

    // Clear the form
    expenseForm.reset();
});

// Display expenses on the webpage
function displayExpenses() {
    // Clear the current list
    expenseList.innerHTML = "";

    // Loop through the expenses array
    expenses.forEach(function(expense) {
        const listItem = document.createElement("li");

        listItem.textContent =
            `${expense.name} - KSh ${expense.amount.toLocaleString()} - ` +
            `${expense.category} (${expense.level})`;

        // Add the expense to the webpage
        expenseList.appendChild(listItem);
    });
}