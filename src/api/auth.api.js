const express = require("express");
let router = require("express").Router();
const controller = require("../controller/auth.contreoller");
const verifyToken = require("../middleware/auth.middleware");
const auth = require("../middleware/auth.middleware");


router.post("/",  controller.SignUP);
router.get("/me", verifyToken, controller.me);



module.exports = router;
