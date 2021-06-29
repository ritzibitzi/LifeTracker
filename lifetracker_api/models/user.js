const db = require("../db")
const { UnauthorizedError } = require("../utils/errors");

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

        //Ensure user doesn't already exist in the system w/ the email
        //If email exists in db, throw error

        //Take user's pw and hash it.
        //Take user's email and lowercase it.

        //Create a new user in the db with all their info
        //return the user.
    }
}