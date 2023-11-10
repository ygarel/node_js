const express = require('express')
const router = express.Router()
const {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
} = require('../controller/AuthorController')

router.get('/:id', getUser)

router.get('/', getUsers)

router.post('/', addUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router