const express = require('express')
const router = express.Router()

const subcategories = require('../database/controllers/subcategories')

router.post('/subcategories/create', async (req, res) => {
    const { name, description, category_id } = req.body
    const subcategorie = await subcategories.create(name, description, category_id)
    res.json(subcategorie)
})

router.get('/subcategories/findAll', async (req, res) => {
    const subcategorie = await subcategories.findAll()
    res.json(subcategorie)
})

router.post('/subcategories/findAllByCategory', async (req, res) => {
    const { category_id } = req.body
    const subcategorie = await subcategories.findAllByCategory(category_id)
    res.json(subcategorie)
})

router.post('/subcategories/findOneById', async (req, res) => {
    const { id } = req.body
    const subcategorie = await subcategories.findAllById(id)
    res.json(subcategorie)
})

router.post('/subcategories/findOneByName', async (req, res) => {
    const { name } = req.body
    const subcategorie = await subcategories.findOneByName(name)
    res.json(subcategorie)
})

router.post('/subcategories/update', async (req, res) => {
    const { id, name, description, categoryId } = req.body
    const subcategorie = await subcategories.update(id, name, description, categoryId)
    res.json(subcategorie)
})

router.post('/subcategories/destroy', async (req, res) => {
    const { id } = req.body
    const subcategorie = await subcategories.remove(id)
    res.json(subcategorie)
})

module.exports = router