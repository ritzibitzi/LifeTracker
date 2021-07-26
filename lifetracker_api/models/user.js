const bcrypt = require("bcrypt")
const db = require("../db");
const { BCRYPT_WORK_FACTOR } = require("../config");
const { UnauthorizedError, BadRequestError } = require("../utils/errors");

class User {
    static makePublicUser(user) {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            is_admin: user.is_admin,
            created_at: user.created_at
            
        }
    }
    static async login(credentials) {
        //User should submit email and password
        //If any missing, throw an error.
        const requiredFields = ["email", "password"];
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })
        //Look up the user in the db by email
        const user = await User.fetchUserByField(credentials.email, "email")
        //If user found, compare the submitted password w/ the password in the db.
        //If there is a match, return user
        if (user) {
            //Check if user is valid by comparing submitted pw to db pw.
            const isValid = await bcrypt.compare(credentials.password, user.password);
            if (isValid) {
                return User.makePublicUser(user);
            }
        }
        //If anything goes wrong, throw error.
        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials) {
        //User should submit email, pw, [RSVP STATUS], and [NUM OF GUESTS]
        //If any missing, throw an error.
        const requiredFields = ["email", "username", "first_name", "last_name", "password", "is_admin"];
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
        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR);
        //Take user's email and lowercase it.
        const lowerCasedEmail = credentials.email.toLowerCase();
        const lowerCasedUsername = credentials.username.toLowerCase();

        //Create a new user in the db with all their info
        //return the user.
        const result = await db.query(`
        INSERT INTO users (password, username, first_name, last_name, email, is_admin)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, username, email, first_name, last_name, created_at, is_admin;
        `,
        [
            hashedPassword,
            lowerCasedUsername,
            credentials.first_name,
            credentials.last_name,
            lowerCasedEmail,
            credentials.is_admin
        ]
        )

        const user = result.rows[0];
        return User.makePublicUser(user);
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