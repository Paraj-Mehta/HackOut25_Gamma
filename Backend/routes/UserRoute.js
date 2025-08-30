const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController.js");

router.route("/user")
    .post(UserController.add);

router.route("/users")
    .post(UserController.getUser)

module.exports = router