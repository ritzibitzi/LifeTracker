const { BadRequestError } = require("../utils/errors")
const db = require("../db")

class Logline {
  static async listLoglinesForUser() {
      //list all posts in db in desc order
  }

  static async fetchLoglineById(postId) {

  }

  static async createNewLogline({ post, user }) {
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

  static async editLogline ( {postId, postUpdate} ) {
      
  }
}

class Ideas {
  static async listLoglinesForUser() {
      //list all posts in db in desc order
  }

  static async fetchLoglineById(postId) {

  }

  static async createNewLogline({ post, user }) {
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

  static async editLogline ( {postId, postUpdate} ) {
      
  }
}

class Progress {
  static async listLoglinesForUser() {
      //list all posts in db in desc order
  }

  static async fetchLoglineById(postId) {

  }

  static async createNewLogline({ post, user }) {
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

  static async editLogline ( {postId, postUpdate} ) {
      
  }
}

module.exports = {
  Logline,
  Ideas,
  Progress,
}
