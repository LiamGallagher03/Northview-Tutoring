const express = require('express')
const app = new express()

app.use(express.static("build"))
app.use(express.json())

app.listen(8080, () => {
    console.log("server started")
})