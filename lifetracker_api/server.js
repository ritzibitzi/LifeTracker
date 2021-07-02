const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./config");
const security = require("./middleware/security")

const authRoutes = require("./routes/auth")
const postRoutes = require("./routes/posts")

const { NotFoundError } = require("./utils/errors");

const app = express();

//Enables cross origin resource sharing for all origins
app.use(cors());
//Parse incoming request body w/ JSON payloads
app.use(express.json());
//Log request info
app.use(morgan("tiny"));
//For every req, check if a token exists in auth header
//If so, attach decoded user to res.locals
app.use(security.extractUserFromJwt)

//Other routes here
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.use((req, res, next) => {
    return next(new NotFoundError());
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    })
})

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
})