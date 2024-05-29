const calcService = require('../services/calcService');
const logger = require('../helpers/logger');

const add = async (req, res) => {
    const { operand1, operand2 } = req.body;
    try {
        const result = await calcService.add(operand1, operand2);
        res.send({ result: Number(result) });
    } catch (error) {
        logger.error(error);
        res.status(error.code || 500).json(error || {code: 500, message: 'Internal server error'});
    }
}

const subtract = async (req, res) => {
    const { operand1, operand2 } = req.body;
    try {
        const result = await calcService.subtract(operand1, operand2);
        res.send({ result: Number(result) });
    } catch (error) {
        logger.error(error);
        res.status(error.code || 500).json(error || {code: 500, message: 'Internal server error'});
    }
}

const multiply = async (req, res) => {
    const { operand1, operand2 } = req.body;
    try {
        const result = await calcService.multiply(operand1, operand2);
        res.send({ result: Number(result) });
    } catch (error) {
        logger.error(error);
        res.status(error.code || 500).json(error || {code: 500, message: 'Internal server error'});
    }
}

const divide = async (req, res) => {
    const { operand1, operand2 } = req.body;
    try {
        const result = await calcService.divide(operand1, operand2);
        res.send({ result: Number(result) });
    } catch (error) {
        logger.error(error);
        res.status(error.code || 500).json(error || {code: 500, message: 'Internal server error'});
    }
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};