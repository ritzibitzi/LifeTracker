const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Post {
    static async listPosts() {
        //list all posts in db in desc order
    }

    static async fetchPostById(postId) {

    }

    static async createNewPost({ post, user }) {
        const requiredFields = ["title", "protagonist", "incident", "goal", "conflict"]
        requiredFields.forEach((field) => {
            if (!post.hasOwnProperty(field) || !post[field]) {
              throw new BadRequestError(`Required field - ${field} - missing from request body.`)
            }
          })
        const results = await db.query(
            `INSERT INTO loglines (title, protagonist, incident, goal, conflict, user_id)
             VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE email = $6))
             RETURNING id, title, protagonist, incident, goal, conflict, user_id, created_at, updated_at`
             , [post.title, post.protagonist, post.incident, post.goal, post.conflict, user.email]
        )
        return results.rows[0];
    }

    static async editPost ( {postId, postUpdate} ) {
        
    }
}

module.exports = Post