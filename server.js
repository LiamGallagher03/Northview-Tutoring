const express = require('express')
const app = new express()
const db = require('better-sqlite3')('NVTutoring.db')

app.use(express.static("build"))
app.use(express.json())



app.get('/tutor_sessions', (req, res) => {
    const query = db.prepare("SELECT * FROM tutor_sessions")
    const tutor_sessions = query.all()
    res.json({
        tutor_sessions
    })
})


app.get('/users', (req, res) => {
    const query = db.prepare("SELECT * FROM users")
    const users = query.all()
    res.json({
        users
    })
})





app.listen(8080, () => {
    console.log("server started")
})
