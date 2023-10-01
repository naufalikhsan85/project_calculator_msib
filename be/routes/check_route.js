const express = require('express') //import lib express
const router = express.Router()
const check = require('../controllers/check_controller')

router.get("/test_api", check.test_api);
router.get("/hasil2", check.hasil2);

module.exports = router;