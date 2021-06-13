var express = require("express");
var router = express.Router();

const CellphoneController = require("../controllers/cell_phone");

router.get("/:id");

router.get("/all", CellphoneController.getAllPhones);

module.exports = router;
