const express = require('express') //import lib express
const router = express.Router()
const caculator_sc = require('../controllers/caculator_sc_controller')

router.get("/hasil_sc", caculator_sc.hasil_perkalian_sc);

module.exports = router;