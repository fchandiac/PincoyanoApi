const express = require('express')
const router = express.Router()
const customers = require('../database/controllers/customers')

router.post('/customers/create', async (req, res) => {
    const { name } = req.body
    const customer = await customers.create(name)
    res.json(customer)
})

router.get('/customers/findAll', async (req, res) => {
    const customer = await customers.findAll()
    res.json(customer)
})


router.post('/customers/findByName', async (req, res) => {
    const { name } = req.body
    const customer = await customers.findByName(name)
    res.json(customer)
})

module.exports = router
