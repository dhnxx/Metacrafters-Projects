# project-ethavax-errorhandling

This Solidity project provides a practical demonstration of error handling using the `require`, `revert`, and `assert` functions in Solidity smart contracts.

## Overview

Solidity smart contracts often need to enforce specific conditions to ensure the security and integrity of blockchain applications. Three commonly used error handling mechanisms are:

1. **`require`**: The `require` statement is used to check conditions that must be met for the contract to continue executing. If the condition is not met, the transaction is reverted, and any changes made are undone. We use `require` for essential conditions that should never fail.

2. **`revert`**: The `revert` statement is used to explicitly revert the execution of a function. It's often used when you want to intentionally revert the transaction, providing a custom error message. This is useful for handling specific cases or creating more descriptive error messages.

3. **`assert`**: The `assert` statement is used to check for internal errors or unexpected conditions. Unlike `require`, `assert` should only be used for conditions that indicate a bug or a critical issue. If the condition in `assert` fails, the contract is forced into an invalid state.

## Template Repository

This project is based on the [solidity_starter](https://github.com/jeffryan-POL/solidity_starter) created by [Jeff Ryan](https://github.com/jeffryan-POL).

## Executing program

1. Install [Node.js](https://nodejs.org)

   Download and install from the official site.

2. Install [Truffle](https://github.com/trufflesuite/truffle)

   ```bash
   npm install -g truffle
   ```
3. Start Truffle console in development mode (Note: Ctrl + D to exit the truffle development mode)  

   ```bash
   truffle develop
   ```

   In the Truffle console, execute

   ```bash
   compile
   migrate
   ```
5. Test and run the functions `require()`, `assert()`, `revert()`

   In the interactive Truffle console, run the following commands ("instance" can be any variable name): 

   ```javascript
   let instance = await HelloWorld.deployed()
   ```

   Pass any value in the `x`. `require()` and `revert()` will return `Hello, World!` if the value doesn't meet the conditon to throw an error exception/handling.

   In this code, the condition is if the value is greater than 15. If the value is greater is less than 15, it will throw an exception. 
   
    **require()**
   
   ```javascript
   instance.requireSample(x) 
   ```

    **revert()**
   
   ```javascript

   instance.revertSample(x) 
   ```

   **assert()**
   
   ```javascript
  
   instance.assertSample(x) 
   ```

 ## Author/s

Contributor/s names and contact info:

Dhanco Mendoza [@dhnxx](https://github.com/dhnxx)
    
