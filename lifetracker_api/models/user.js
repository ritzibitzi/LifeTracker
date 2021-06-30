const db = require("../db")
const { UnauthorizedError, BadRequestError } = require("../utils/errors");

class User {
    static async login(credentials) {
        //User should submit email and password
        //If any missing, throw an error.

        //Look up the user in the db by email
        //If user found, compare the submitted password w/ the password in the db.
        //If there is a match, return user

        //If anything goes wrong, throw error.
        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials) {
        //User should submit email, pw, [RSVP STATUS], and [NUM OF GUESTS]
        //If any missing, throw an error.
        const requiredFields = ["email", "username", "first_name", "last_name", "password"];
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        if(credentials.email.indexOf("@") <= 0 ) {
            throw new BadRequestError("Invalid email.");
        }
        //Ensure user doesn't already exist in the system w/ the email OR username.
        //If email OR username exists in db, throw error
        const existingEmail = await User.fetchUserByField(credentials.email, "email")
        const existingUsername = await User.fetchUserByField(credentials.username, "username")
        if (existingEmail) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        } 
        
        if (existingUsername) {   
            throw new BadRequestError(`This username already exists: ${credentials.username}`)
        }
        //Take user's pw and hash it.
        //Take user's email and lowercase it.
        const lowerCasedEmail = credentials.email.toLowerCase();
        const lowerCasedUsername = credentials.username.toLowerCase();

        //Create a new user in the db with all their info
        //return the user.
        const result = await db.query(`
        INSERT INTO users (password, username, first_name, last_name, email)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, username, email, first_name AS "firstName", last_name AS "lastName", created_at;
        `,
        [
            /*lowerCasedUsername,
            password,
            firstName,
            lastName,
            lowerCasedEmail,
            created_at*/

            credentials.password,
            lowerCasedUsername,
            credentials.first_name,
            credentials.last_name,
            lowerCasedEmail
        ]
        )

        const user = result.rows[0];
        return user;
    }

    static async fetchUserByField(fieldVal, fieldName) {
        if (!fieldVal && !(fieldName)) {
            throw new BadRequestError(`No ${fieldName} provided`);
        }
        const query = `SELECT * FROM users WHERE ${fieldName} = $1`;
        const result = await db.query(query, [fieldVal.toLowerCase()]);
        const user = result.rows[0];
        return user;
    }
}

module.exports = User;