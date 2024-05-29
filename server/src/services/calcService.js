const fs = require('fs');
const contractABI = JSON.parse(fs.readFileSync('public/Calculator.abi', 'utf8'));

const { Web3 } = require('web3');
const logger = require('../helpers/logger');

const infuraUrl = process.env.INFURA_URL;
const contractAddress = process.env.CONTRACT_ADDRESS;
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
const contract = new web3.eth.Contract(contractABI, contractAddress);

const add = async (operand1, operand2) => {
    logger.info(`Adding ${operand1} and ${operand2}`);
    try {
        return await contract.methods.add(operand1, operand2).call();
    }  catch (error) {
        throw {
            code: 502,
            message: 'Failed to call contract method',
            debug: error.message || error.cause.message
        };
    }
}

const subtract = async (operand1, operand2) => {
    logger.info(`Subtracting ${operand1} and ${operand2}`);
    try {
        return await contract.methods.subtract(operand1, operand2).call();
    }  catch (error) {
        throw {
            code: 502,
            message: 'Failed to call contract method',
            debug: error.message || error.cause.message
        };
    }
}

const multiply = async (operand1, operand2) => {
    logger.info(`Multiplying ${operand1} and ${operand2}`);
    try {
        return await contract.methods.multiply(operand1, operand2).call();
    }  catch (error) {
        throw {
            code: 502,
            message: 'Failed to call contract method',
            debug: error.message || error.cause.message
        };
    }
}

const divide = async (operand1, operand2) => {
    logger.info(`Dividing ${operand1} and ${operand2}`);
    try {
        return await contract.methods.divide(operand1, operand2).call();
    }  catch (error) {
        throw {
            code: 502,
            message: 'Failed to call contract method',
            debug: error.message || error.cause.message
        };
    }
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};