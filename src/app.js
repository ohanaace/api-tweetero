import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const tweets = []
const users = []

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body
    if(!username || !avatar){
        return res.status(400).send("Todos os campos são obrigatórios!")
    }
    const user = {id: users.length + 1, username, avatar}
    users.push(user)
    res.status(201).send("OK")
})

app.post("/tweets", (req, res) => {
const {username, tweet} = req.body
const loggedUser = users.find((u) => u.username === username)
if(!loggedUser){
    return res.status(401).send("UNAUTHORIZED")
}
if(!tweet){
    return res.status(400).send("Todos os campos são obrigatórios!")
}
const newTweet = {id: tweets.length + 1, username, tweet}
tweets.push(newTweet)
res.status(201).send("OK")
})

app.get("/tweets", (req, res) => {
    if(tweets.length > 10){
        const diff = tweets.length - 10
        const recentTweets = tweets.filter((rec) => rec.id > diff)
        return res.send(recentTweets)
    }
    res.send(tweets)
})

const PORT = 5000
app.listen(PORT)