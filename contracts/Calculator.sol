// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    event Calculation(int256 operand1, int256 operand2, string operator, int256 result);

    function add(int256 operand1, int256 operand2) public returns (int256 result) {
        result = operand1 + operand2;
        emit Calculation(operand1, operand2, "+", result);
        return result;
    }

    function subtract(int256 operand1, int256 operand2) public returns (int256 result) {
        result = operand1 - operand2;
        emit Calculation(operand1, operand2, "-", result);
        return result;
    }

    function multiply(int256 operand1, int256 operand2) public returns (int256 result) {
        result = operand1 * operand2;
        emit Calculation(operand1, operand2, "*", result);
        return result;
    }

    function divide(int256 operand1, int256 operand2) public returns (int256 result) {
        require(operand2 != 0, "Division by zero");
        result = operand1 / operand2;
        emit Calculation(operand1, operand2, "/", result);
        return result;
    }
}