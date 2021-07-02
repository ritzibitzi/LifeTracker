const express = require("express")
const security = require("../middleware/security")
const router = express.Router()

const { Logline } = require("../models/activity");

router.post("/loglines/create", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      // create a new post
      const { user } = res.locals
      //console.log(user.username); NOTE: RES.LOCALS RETURNS EMAIL AND SOME OTHER TEXT...
      const post = await Logline.createNewLogline({ user, post: req.body })
      return res.status(201).json({ post })
    } catch (err) {
      next(err)
    }
  })

router.get("/loglines", async (req, res, next) => {
    try {
        //List all loglines
    } catch(err) {
        next(err);
    }
}) 

router.post("/ideas/create", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      // create a new idea
      const { user } = res.locals
      //console.log(user.username); NOTE: RES.LOCALS RETURNS EMAIL AND SOME OTHER TEXT...
      //const post = await Post.createNewPost({ user, post: req.body })
      //return res.status(201).json({ post })
    } catch (err) {
      next(err)
    }
  })

router.get("/ideas", async (req, res, next) => {
    try {
        //List all ideas
    } catch(err) {
        next(err);
    }
}) 

router.post("/progress/create", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      // create a new post
      const { user } = res.locals
      //console.log(user.username); NOTE: RES.LOCALS RETURNS EMAIL AND SOME OTHER TEXT...
      //const post = await Post.createNewPost({ user, post: req.body })
      //return res.status(201).json({ post })
    } catch (err) {
      next(err)
    }
  })

router.get("/progress", async (req, res, next) => {
    try {
        //List all loglines
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