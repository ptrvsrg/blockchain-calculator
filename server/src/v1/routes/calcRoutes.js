const calcController = require('../../controllers/calcController');
const express = require('express');
const router = express.Router();

router.post('/add', calcController.add);
router.post('/subtract', calcController.subtract);
router.post('/multiply', calcController.multiply);
router.post('/divide', calcController.divide);

module.exports = router;