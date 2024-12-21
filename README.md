# React Native: Accessing Uninitialized State Property

This repository demonstrates a common error in React Native: attempting to access a state property before it's initialized, often after an asynchronous operation.  The `bug.js` file shows the problematic code, while `bugSolution.js` presents solutions.

## Problem

Asynchronous state updates (e.g., fetching data) can lead to errors if a component tries to render before the state is updated.  Attempting to access a property of a `null` or `undefined` state variable results in a runtime error. 

## Solution

Several approaches prevent this error:

1. **Conditional Rendering:** Only render the component's parts that depend on the state variable once the state is populated.

2. **Optional Chaining:** Use the optional chaining operator (`?.`) to safely access properties, preventing errors if the property is undefined.

3. **Default Values:** Initialize state with default values to handle the initial render before state updates.