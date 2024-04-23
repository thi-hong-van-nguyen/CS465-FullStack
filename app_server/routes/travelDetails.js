var express = require("express");
var router = express.Router();
const controller = require("../controllers/travel");

/* GET about page. */
router.get("/:tripCode", controller.travelDetails);

module.exports = router;
