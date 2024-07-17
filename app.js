const express = require('express')
const app = express()

//alternative
//const app = require ('express')

app.get("/", (req, res) => {
    res.send("See you World!")
})








app.listen(4000, () => {
    console.log('Nodejs server has started at port 3000');
}) 