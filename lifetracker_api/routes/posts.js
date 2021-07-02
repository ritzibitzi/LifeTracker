const express = require("express")
const User = require("../models/user")
const Post = require("../models/posts")
const security = require("../middleware/security")
const router = express.Router()

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      // create a new post
      const { user } = res.locals
      //console.log(user.username); NOTE: RES.LOCALS RETURNS EMAIL AND SOME OTHER TEXT...
      const post = await Post.createNewPost({ user, post: req.body })
      return res.status(201).json({ post })
    } catch (err) {
      next(err)
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

module.exports = router