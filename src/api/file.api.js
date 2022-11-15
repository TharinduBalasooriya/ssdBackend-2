const express = require("express");
let router = require("express").Router();
const controller = require("../controller/file.controller");


router.post("/",  controller.addNewFile);
router.get("/",  controller.getAllFile);
router.get("/:id",  controller.getFileByID);


module.exports = router;