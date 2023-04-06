import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const tweets = []
const users = []

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body
    const user = {id: users.length + 1, username, avatar}
    users.push(user)
    res.send("OK")
})

app.post("/tweets", (req, res) => {
const {username, tweet} = req.body
const loggedUser = users.find((u) => u.username === username)
if(!loggedUser){
    return res.status(400).send("UNAUTHORIZED")
}
const newTweet = {id: tweets.length + 1, username, tweet}
tweets.push(newTweet)
res.send("OK")
})

app.get("/tweets", (req, res) => {
    res.send(tweets)
})

const PORT = 5000
app.listen(PORT)