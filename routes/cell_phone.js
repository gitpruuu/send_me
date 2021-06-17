var express = require("express");
var router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

const CellController = require("../controllers/cellPhoneController");

router.get("/", CellController.getAllPhones);

router.post(
  "/add",
  multer(multerConfig).single("photos"),
  CellController.insertPhone
);

module.exports = router;
