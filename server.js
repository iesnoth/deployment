const express = require('express')
const app = express()

app.get(`/`,(req,res)=>{
    res.send("Sup homies.")
})

app.listen(3000)

module.exports = app;