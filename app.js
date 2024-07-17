const express = require('express')
const app = express()

//alternative
//const app = require ('express')

app.get("/", (req, res) => {

    res.status(200).json({
        "name": "Prashant Shakya",
        "age": 21
    })
})








app.listen(4000, () => {
    console.log('Nodejs server has started at port 4000');
}) 