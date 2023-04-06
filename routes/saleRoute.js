const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const { createSale, getSales } = require("../controllers/saleController");
 

router.post("/", protect, createSale);
router.get("/", protect, getSales);

module.exports = router;
