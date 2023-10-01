const express = require('express') //import lib express
const router = express.Router()
const check = require('../controllers/aritmatika_controller')

router.get("/perkalian", check.perkalian);

module.exports = router;