const express = require('express')
const router = express.Router()
const sellers = require('../database/controllers/sellers')

router.post('/sellers/create', async (req, res) => {
    const { code, name } = req.body
    const seller = await sellers.create(code, name)
    res.json(seller)
})

router.get('/sellers/findAll', async (req, res) => {
    const seller = await sellers.findAll()
    res.json(seller)
})

router.post('/sellers/findByName', async (req, res) => {
    const { name } = req.body
    const seller = await sellers.findByName(name)
    res.json(seller)
})


router.post('/sellers/findByCode', async (req, res) => {
    const { code } = req.body
    const seller = await sellers.findByCode(code)
    res.json(seller)
})


router.post('/sellers/updateName', async (req, res) => {
    const { id, name } = req.body
    const seller = await sellers.updateName(id, name)
    res.json(seller)
})

module.exports = router