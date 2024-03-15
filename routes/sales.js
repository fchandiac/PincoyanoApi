const express = require('express')
const router = express.Router()
const sales  = require('../database/controllers/sales')



router.post('/sales/create', async (req, res) => {
    const { invoice, quanty, price, discount, return_, total_return, total_sale, total, product_id, customer_id, seller_id, date, file_id } = req.body
    const sale = await sales.create(invoice, quanty, price, discount, return_, total_return, total_sale, total, product_id, customer_id, seller_id, date, file_id)
    res.json(sale)
})


router.post('/sales/findAllBetweenDate', async (req, res) => {
    const { start, end } = req.body
    const sale = await sales.findAllbetweenDate(start, end)
    res.json(sale)
})

router.post('/sales/findAllBySellerBetweenDate', async (req, res) => {
    console.log(req.body)
    const { seller_id, start, end } = req.body
    const sale = await sales.findAllBySellerBetweenDate(seller_id, start, end)
    res.json(sale)
})

router.post('/sales/findAllByCustomerBetweenDate', async (req, res) => {
    const { customerId, start, end } = req.body
    const sale = await sales.findAllByCustomerBetweenDate(customerId, start, end)
    res.json(sale)
})

router.post('/sales/findAllByProductBetweenDate', async (req, res) => {
    const { productId, start, end } = req.body
    const sale = await sales.findAllByProductBetweenDate(productId, start, end)
    res.json(sale)
})



router.post('/sales/totalSalesBetweenDate', async (req, res) => {
    const { start, end } = req.body
    const sale = await sales.totalSalesBetweenDate(start, end)
    res.json(sale)
})

router.post('/sales/totalQuantyBetweenDate', async (req, res) => {
    const { start, end } = req.body
    const sale = await sales.totalQuantyBetweenDate(start, end)
    res.json(sale)
})



router.post('/sales/findAllSoldProductsBetweenDates', async (req, res) => {
    const { startDate, endDate } = req.body
    const sale = await sales.findAllSoldProductsBetweenDates(startDate, endDate)
    res.json(sale)
})



router.post('/sales/findAllSoldProductsBetweenDates', async (req, res) => {
    const { startDate, endDate } = req.body
    const sale = await sales.findAllSoldProductsBetweenDates(startDate, endDate)
    res.json(sale)
})


router.post('/sales/customersSalesBetweenDate', async (req, res) => {
    const { start, end } = req.body
    const sale = await sales.customersSalesBetweenDate(start, end)
    res.json(sale)
})



router.post('/sales/findAllGroupByCategoryBetweenDates', async (req, res) => {
    const { startDate, endDate } = req.body
    const sale = await sales.findAllGroupByCategoryBetweenDates(startDate, endDate)
    res.json(sale)
})


router.post('/sales/findAllBySellerGroupByCategoryBetweenDate', async (req, res) => {
    const { seller_id, start, end } = req.body
    const sale = await sales.findAllBySellerGroupByCategoryBetweenDate(seller_id, start, end)
    res.json(sale)
})


router.post('/sales/totalSalesByProductBetweenDates', async (req, res) => {
    const { product_id, startDate, endDate } = req.body
    const sale = await sales.totalSalesByProductBetweenDates(product_id, startDate, endDate)
    res.json(sale)
})

router.post('/sales/totalQuantyByProductBetweenDates', async (req, res) => {
    const { product_id, startDate, endDate } = req.body
    const sale = await sales.totalQuantyByProductBetweenDates(product_id, startDate, endDate)
    res.json(sale)
})

router.post('/sales/findAllByProductBetweenDateGroupByDate', async (req, res) => {
    const { product_id, startDate, endDate } = req.body
    const sale = await sales.findAllByProductBetweenDateGroupByDate(product_id, startDate, endDate)
    res.json(sale)
})

router.post('/sales/totalSalesByCustomerBetweenDates', async (req, res) => {
    const { customer_id, startDate, endDate } = req.body
    const sale = await sales.totalSalesByCustomerBetweenDates(customer_id, startDate, endDate)
    res.json(sale)
})

router.post('/sales/totalQuantyByCustomerBetweenDates', async (req, res) => {
    const { customer_id, startDate, endDate } = req.body
    const sale = await sales.totalQuantyByCustomerBetweenDates(customer_id, startDate, endDate)
    res.json(sale)
})

router.post('/sales/findAllByCustomerBetweenDateGroupByDate', async (req, res) => {
    const { customer_id, startDate, endDate } = req.body
    const sale = await sales.findAllByCustomerBetweenDateGroupByDate(customer_id, startDate, endDate)
    res.json(sale)
})



router.post('/sales/findAllByCustomerBetweenDateGroupByCategory', async (req, res) => {
    const { customer_id, startDate, endDate } = req.body
    const sale = await sales.findAllByCustomerBetweenDateGroupByCategory(customer_id, startDate, endDate)
    res.json(sale)
})


router.post('/sales/destroy', async (req, res) => {
    const { id } = req.body
    const sale = await sales.destroy(id)
    res.json(sale)
})

router.post('/sales/destroyAllByFile', async (req, res) => {
    const { file_id } = req.body
    const sale = await sales.destroyAllByFile(file_id)
    res.json(sale)
})




module.exports = router