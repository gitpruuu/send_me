var express = require("express");
var router = express.Router();

const CellController = require("../controllers/cellPhoneController");

router.get("/", CellController.getAllPhones);

router.post("/add", CellController.insertPhone);

module.exports = router;
