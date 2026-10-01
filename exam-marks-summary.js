// Day 01 - Problem 1: Exam Marks Summary
//
// Problem statement:
// Given the marks of three subjects, calculate the total marks and the average marks.
//
// Input / example values:
// English = 78
// Mathematics = 85
// Science = 92
//
// Expected output:
// Total marks: 255
// Average marks: 85
//
// JavaScript solution:

const englishMarks = 78;
const mathematicsMarks = 85;
const scienceMarks = 92;

const totalMarks = englishMarks + mathematicsMarks + scienceMarks;
const averageMarks = totalMarks / 3;

console.log("Total marks: " + totalMarks);
console.log("Average marks: " + averageMarks);

// Actual output:
// Total marks: 255
// Average marks: 85
//
// Explanation:
// We store each subject mark in a variable, add the three values to get
// the total, and divide the total by 3 to calculate the average.
//
// Concepts practiced:
// - Variables
// - Numbers
// - Addition
// - Division
// - Basic output with console.log()
