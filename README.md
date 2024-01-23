# Student Note Management System

## Overview

This project consists of a series of JavaScript functions designed to manage and display student data, including retrieving maximum and minimum notes for students and sorting students by last name. These functions are demonstrated in an `index.html` file, with results displayed in the console.

## Features

### Task 1: Retrieve Maximum and Minimum Student Notes

- **Function `getMaxNote`**: Finds the student with the given `studentId` in `studentsArray`, calculates the maximum note, and passes the result to the callback function `cb`.
- **Function `getMinNote`**: Similar to `getMaxNote`, but calculates the minimum note for the specified student.
- **Callback Function `displayInfo`**: Used by both `getMaxNote` and `getMinNote` to display formatted information about the student and their note in the console.

### Task 2: Sort and Display Students

- **Function `displayStudents`**:
  - Splits the full name of each student into first and last names and adds the last name as a new property to each student object.
  - Sorts the students array by last name using the `compareNames` function.
  - Logs each student's name and PESEL number to the console in a formatted manner.

### Implementation

- The functions are demonstrated in the `index.html` file.
- The results, including console logs, are visible when the `index.html` file is run in a web browser.

## Usage

1. Open `index.html` in a web browser.
2. Use the browser's developer tools to open the console.
3. Observe the results of the function executions as logged in the console.

## Additional Notes

- This project is intended to demonstrate basic JavaScript skills, including array manipulation, object handling, and sorting algorithms.
- It serves as an educational tool for understanding JavaScript functions and their applications.
