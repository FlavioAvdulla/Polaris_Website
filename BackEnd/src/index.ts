import express from 'express'

const app = express()

app.listen(
    4004,
    () => {
        console.log("Server is running on port 4004 in development environment.")
    }
)