const { BadRequestError, UnauthorizedError } = require("../utils/errors")
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

  static async createNewLogline(user, post) {
      const requiredFields = ["title", "protagonist", "incident", "goal", "conflict"]
      console.log("CREATE NEW", post.logForm.title)
      post = post.logForm;
      console.log("USER: ", user)
      
      requiredFields.forEach((field) => {
          if (!post.hasOwnProperty(field) || !post[field]) {
            console.log("ERRRRRRRRRRRRRRRRR")
            throw new BadRequestError(`Required field - ${field} - missing from request body.`)
          }
          else {
            console.log("GOOD!", post[field])
          }
        })
      const results = await db.query(
          `INSERT INTO loglines (title, protagonist, incident, goal, conflict, user_id)
           VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE email = $6))
           RETURNING id, title, protagonist, incident, goal, conflict, user_id, created_at, updated_at`
           , [post.title, post.protagonist, post.incident, post.goal, post.conflict, user.email]
      )
      console.log(results)
      console.log("RES.ROWS: ", results.rows[0])
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
  static async listProgressForUser(user) {
      //list all posts in db in desc order
      const query =
        `SELECT id, fecha, title, priority, stat, descrip, resources, user_id
         FROM progress
         WHERE user_id = (SELECT id FROM users WHERE email = $1)`
      const result = await db.query(query, [user.email])
    return result.rows;
  }

  static async fetchIdeaById(postId) {

  }

  static async createNewPoint({ post, user }) {
      const requiredFields = ["fecha", "title", "priority", "stat", "descrip", "resources"]
      requiredFields.forEach((field) => {
          if (!post.hasOwnProperty(field) || !post[field]) {
            throw new BadRequestError(`Required field - ${field} - missing from request body.`)
          }
        })
      const results = await db.query(
          `INSERT INTO progress (fecha, title, priority, stat, descrip, resources, user_id)
           VALUES ($1, $2, $3, $4, $5, $6, (SELECT id FROM users WHERE email = $7))
           RETURNING id, fecha, title, priority, stat, descrip, user_id, created_at, updated_at`
           , [post.fecha, post.title, post.priority, post.stat, post.descrip, post.resources, user.email]
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
