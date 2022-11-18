const express = require("express");
let router = require("express").Router();
const controller = require("../controller/message.controller");
const verifyToken = require("../middleware/auth.middleware");


router.post("/",  verifyToken,controller.addNewMessage);
router.get("/getByUser/:id", verifyToken , controller.getAllMessages);
router.get("/:id",  verifyToken ,controller. getMessageByID);
router.delete("/:id",  verifyToken ,controller. deleteMessage);


module.exports = router;