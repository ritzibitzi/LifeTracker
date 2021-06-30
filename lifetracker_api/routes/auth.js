const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/login", async (req, res, next) => {
    try {
        //Take user email and password. Attempt to authenticate them.
        const user = await User.login(req.body);
        return res.status(200).json({ user });
    } catch(err) {
        next(err);
    }
})

router.post("/register", async (req, res, next) => {
    try {
        //Take user email, password, [RSVP STATUS], and [THE NUMBER OF GUESTS]
        //Create a new user in our database.
        const user = await User.register(req.body);
        return res.status(201).json({ user });
    } catch(err) {
        next(err);
    }
})

module.exports = router;