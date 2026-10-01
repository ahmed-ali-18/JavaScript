// Day 01 - Problem 2: Monthly Savings Calculator
//
// Problem statement:
// Given a person's monthly income and monthly expenses, calculate how much
// money remains as savings at the end of the month.
//
// Input / example values:
// Monthly income = 25000
// Monthly expenses = 18500
//
// Expected output:
// Monthly savings: 6500
//
// JavaScript solution:

const monthlyIncome = 25000;
const monthlyExpenses = 18500;

const monthlySavings = monthlyIncome - monthlyExpenses;

console.log("Monthly savings: " + monthlySavings);

// Actual output:
// Monthly savings: 6500
//
// Explanation:
// We store the income and expenses in variables, then subtract the expenses
// from the income to find the amount left for savings.
//
// Concepts practiced:
// - Variables
// - Numbers
// - Subtraction
// - Basic calculations
// - Basic output with console.log()
