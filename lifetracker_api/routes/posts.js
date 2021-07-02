const express = require("express")
const security = require("../middleware/security")
const router = express.Router()

const { Logline, Ideas } = require("../models/activity");

//Create a new logline
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

//Get loglines
router.get("/loglines", async (req, res, next) => {
    try {
        const { user } = res.locals
        const loglines = await Logline.listLoglinesForUser(user)
        return res.status(200).json({ loglines })
      } catch (err) {
        next(err)
      }
}) 

//Create a new idea
router.post("/ideas/create", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      // create a new post
      const { user } = res.locals
      //console.log(user.username); NOTE: RES.LOCALS RETURNS EMAIL AND SOME OTHER TEXT...
      const post = await Ideas.createNewIdea({ user, post: req.body })
      return res.status(201).json({ post })
    } catch (err) {
      next(err)
    }
  })

//Get
router.get("/ideas", async (req, res, next) => {
    try {
        const { user } = res.locals
        const idea = await Ideas.listIdeasForUser(user)
        return res.status(200).json({ idea })
      } catch (err) {
        next(err)
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