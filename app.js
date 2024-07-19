const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Book = require("./model/bookModel")

//alternative
//const app = require ('express')

const connectionString = "mongodb+srv://Saakiyeah:Saakiyeahdb@cluster0.1b4lbgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectionToDatabase() {
    await mongoose.connect(connectionString)
    console.log('Connection to Database Successful')
}

connectionToDatabase()

app.use(express.json())
//app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {

    res.status(200).json({
        "message": "Success"
    })
})

app.post("/book", async (req, res) => {

    const { bookName, bookPrice, authorName, isbnNumber, publishedAt } = req.body
    await Book.create({
        bookName,
        bookPrice,
        authorName,
        isbnNumber,
        publishedAt
    })


})









app.listen(4000, () => {
    console.log('Nodejs server has started at port 4000');
}) 