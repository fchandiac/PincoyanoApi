const express = require('express')
const router = express.Router()
const products = require('../database/controllers/products')

router.post('/products/create', async (req, res) => {
    const { code, name, subcategory_id } = req.body
    const product = await products.create(code, name, subcategory_id)
    res.json(product)
    // const { code, name, subcategory_id } = req.body
    // res.json({ code, name, subcategory_id })
   
    
})

router.get('/products/findAll', async (req, res) => {
    const product = await products.findAll()
    res.json(product)
})

router.post('/products/findOneByName', async (req, res) => {
    const { name } = req.body
    const product = await products.findOneByName(name)
    res.json(product)
})


router.post('/products/update', async (req, res) => {
    const { id, code, name, subcategory_id } = req.body
    const product = await products.update(id, code, name, subcategory_id)
    res.json(product)
})


//findOneByCode(code)

router.post('/products/findOneByCode', async (req, res) => {
    const { code } = req.body
    const product = await products.findOneByCode(code)
    res.json(product)
})



module.exports = router