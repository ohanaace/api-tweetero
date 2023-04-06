import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const tweets = []
const users = []

app.post("/sign-up", (req, res) => {
    console.log(req.body)
    const {username, avatar} = req.body
    const user = {id: users.length + 1, username, avatar}
    users.push(user)
    res.send("OK")
})

app.post("/tweets", (req, res) => {

})

app.get("/tweets", (req, res) => {
    res.send(tweets)
})

const PORT = 5000
app.listen(PORT)