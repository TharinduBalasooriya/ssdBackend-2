const express = require("express");
let router = require("express").Router();
const controller = require("../controller/file.controller");
const verifyToken = require("../middleware/auth.middleware");


router.post("/", verifyToken, controller.addNewFile);
router.get("/",  verifyToken,controller.getAllFile);
router.get("/:id",  verifyToken,controller.getFileByID);


module.exports = router;