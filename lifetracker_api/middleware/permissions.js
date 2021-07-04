const Post = require ("../models/posts")
const { BadRequestError, ForbiddenError } = require("../utils/errors")

//Ensure authenticated user is owner of post. If they aren't, throw an error.
//Else, we're good.
const authedUserOwnsPost = async (req, res, next) => {
    try {
        const { user } = res.locals;
        const { postId } = req.param;
        const post = await Post.fetchPostById(postId)

        if (post.userEmail != user.email) {
            throw new ForbiddenError("User is not allowed to update other users' posts")
        }

        res.locals.post = post;
        return next()
    } catch(err) {
        return next(err)
    }
}

module.exports = {
    authedUserOwnsPost
}