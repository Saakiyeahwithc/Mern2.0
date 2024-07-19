const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Book = require('./model/bookmodel')


//alternative
//const app = require ('express')

const connectionString = "mongodb+srv://Saakiyeah:Saakiyeahdb@cluster0.1b4lbgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectToDatabase() {
    await mongoose.connect(connectionString)
    console.log('Connection to Database Successful')
}

connectToDatabase()

app.use(express.json())
//app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {

    res.status(200).json({
        "message": "Success"
    })
})

//create book

app.post("/book", async (req, res) => {

    const { bookName, bookPrice, authorName, isbnNumber, publishedAt, publication } = req.body
    await Book.create({
        bookName,
        bookPrice,
        authorName,
        isbnNumber,
        publishedAt,
        publication
    })
    res.status(201).json({
        message: "Books Created Successfully"
    })
})

//all read
app.get("/book", async (req, res) => {
    const books = await Book.find()
    res.status(200).json({
        message: "Books created successfully",
        data: books
    })
})

//single read
app.get("/book/:id", async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findById(id) //return obj garcha

        if (!book) {
            res.status(404).json({
                message: "Nothing Found"
            })
        } else {
            res.json({
                message: "Single book fetched successfully",
                data: book
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }
})



app.listen(4000, () => {
    console.log('Nodejs server has started at port 4000');
}) 