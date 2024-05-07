const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')


router.post('/user/create' , (req,res) => {
    UserController.createUser(req,res)
}
)

router.get('/users/list' , (req,res) => {
    UserController.getUsersList(req,res)
})


router.get('/user/for/edit/:id' , (req,res) => {
    UserController.getUserForEdit(req,res)
})


router.put('/edit/user/:id', (req,res) => {
    UserController.updateUser(req,res)
})

router.delete('/user/delete/:id' , (req,res) => {
    UserController.deleteUser(req,res)
} )

module.exports = router