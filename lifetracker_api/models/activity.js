const { BadRequestError } = require("../utils/errors")
const db = require("../db")

class Logline {
  static async listLoglinesForUser(user) {
      //list all posts in db in desc order
      const query =
        `SELECT id, title, protagonist, incident, goal, conflict, user_id
         FROM loglines
         WHERE user_id = (SELECT id FROM users WHERE email = $1)`
      const result = await db.query(query, [user.email])
    return result.rows;
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
  static async listIdeasForUser(user) {
      //list all posts in db in desc order
      const query =
        `SELECT id, project, title, category, info, resources, user_id
         FROM ideas
         WHERE user_id = (SELECT id FROM users WHERE email = $1)`
      const result = await db.query(query, [user.email])
    return result.rows;
  }

  static async fetchIdeaById(postId) {

  }

  static async createNewIdea({ post, user }) {
      const requiredFields = ["project", "title", "category", "info", "resources"]
      requiredFields.forEach((field) => {
          if (!post.hasOwnProperty(field) || !post[field]) {
            throw new BadRequestError(`Required field - ${field} - missing from request body.`)
          }
        })
      const results = await db.query(
          `INSERT INTO ideas (project, title, category, info, resources, user_id)
           VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE email = $6))
           RETURNING id, project, title, category, info, resources, user_id, created_at, updated_at`
           , [post.project, post.title, post.category, post.info, post.resources, user.email]
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
