require("dotenv").config()
require("colors")
//Does the port exist on process.env? Make it a num. Else, 3001
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const SECRET_KEY = process.env.SECRET_KEY || "secret_dev"

//Create variables to construct database uri
function getDatabaseUri() {
    const dbUser = process.env.DATABASE_USER || "postgres"
    //Use turner. If password exists in process, encode it. Else, use postgres.
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres"
    const dbHost = process.env.DATABASE_HOST || "postgres"
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbName = process.env.DATABASE_NAME || "postgres"

    //If DATABASE_URI env provided, use that.
    //Else, create the db connection tring outselves.
    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`

}

const BCRYPT_WORK_FACTOR = 13;

console.log("Lifetracker Config:".red)
console.log("PORT:".blue, PORT)
console.log("Database URI:".blue, getDatabaseUri())
console.log("SECRET_KEY:".blue, SECRET_KEY)
console.log("---")

module.exports =  {
    PORT,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri
}
