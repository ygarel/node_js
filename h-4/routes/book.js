const express = require('express')
const router = express.Router()
const {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook,
} = require('../controller/BookController')

router.get('/', getBooks)

//route untuk mengirim data 
router.post('/', addBook)

router.get('/:id', getBook)

//route untuk mengubah data
router.put('/:id', updateBook)

//route untuk menghapus data
router.delete('/:id', deleteBook)

module.exports = router
