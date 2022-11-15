const express = require("express");
let router = require("express").Router();
const controller = require("../controller/message.controller");


router.post("/",  controller.addNewMessage);
router.get("/",  controller. getAllMessages);
router.get("/:id",  controller. getMessageByID);


module.exports = router;