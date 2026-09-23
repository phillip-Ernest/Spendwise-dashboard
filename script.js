// SpendWise - JavaScript Foundation

// 1. Store application data
let budget = 0;
let expense = 0;
let remainingBalance = 0;

// 2. Collect user input
budget = Number(prompt("Enter your total budget:"));
expense = Number(prompt("Enter your total expenses:"));

// 3. Function to calculate remaining balance
function calculateRemainingBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}

// 4. Perform the calculation
remainingBalance = calculateRemainingBalance(budget, expense);

// 5. Display results in the browser console
console.log("===== SpendWise Budget Summary =====");
console.log("Total Budget: " + budget);
console.log("Total Expenses: " + expense);
console.log("Remaining Balance: " + remainingBalance);