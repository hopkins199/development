// First express server
const express = require("express")
const app = express()


// Fake Data
const users = [
    {name: "joe", age: 21},
    {name: "moe", age: 28},
    {name: "schmoe", age: 24},
    {name: "poe", age: 22},
    {name: "woe", age: 20}
]

    // 1. Endpoint (mount path)
    // 2. Callback function
app.get("/users", (req, res) => {
    res.send(users)
})


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})