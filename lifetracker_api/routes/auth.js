const express = require("express");
const router = express.Router();
const User = require("../models/user")

router.post("/login", async (req, res, next) => {
    try {
        //Take user email and password. Attempt to authenticate them.
    } catch(err) {
        next(err);
    }
})

router.post("/register", async (req, res, next) => {
    try {
        //Take user email, password, [RSVP STATUS], and [THE NUMBER OF GUESTS]
        //Create a new user in our database.
    } catch(err) {
        next(err);
    }
})

module.exports = router;