const express = require('express')
const app = new express()
//const db = require('better-sqlite3')('database file name')

app.use(express.static("build"))
app.use(express.json())