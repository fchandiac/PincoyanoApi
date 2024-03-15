const express = require('express')
const router = express.Router()
const users = require('../database/controllers/users')


router.post('/users/create', async (req, res) => {
    const { user_name, name, pass } = req.body
    const user = await users.create(user_name, name, pass)
    res.json(user)
})

router.get('/users/findAll', async (req, res) => {
    const user = await users.findAll()
    res.json(user)
})

router.post('/users/findOneById', async (req, res) => {
    const { id } = req.body
    const user = await users.findOne(id)
    res.json(user)
})

router.post('/users/findOneByUserName', async (req, res) => {
    const { user_name } = req.body
    const user = await users.findOneByUserName(user_name)
    res.json(user)
})


router.post('/users/update', async (req, res) => {
    const { id, user_name, name} = req.body
    const user = await users.update(id, user_name, name)
    res.json(user)
})

router.post('/users/destroy', async (req, res) => {
    const { id } = req.body
    const user = await users.destroy(id)
    res.json(user)
})

router.post('/users/login', async (req, res) => {
    const { user_name, pass } = req.body
    const user = await users.login(user_name, pass)
    res.json(user)
})

router.post('/users/updatePass', async (req, res) => {
    const { id, pass, newPass } = req.body
    const user = await users.updatePass(id, pass, newPass)
    res.json(user)
})


module.exports = router