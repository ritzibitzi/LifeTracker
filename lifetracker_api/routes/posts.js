const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.post("/", async (req, res, next) => {
    try {
        //Create new post
    } catch(err) {
        next(err);
    }
}) 

router.get("/", async (req, res, next) => {
    try {
        //List all posts
    } catch(err) {
        next(err);
    }
}) 

router.get("/:postId", async (req, res, next) => {
    try {
        //Fetch single post by id
    } catch(err) {
        next(err);
    }
}) 

router.put("/:postId", async (req, res, next) => {
    try {
        //Update single post by id
    } catch(err) {
        next(err);
    }
})