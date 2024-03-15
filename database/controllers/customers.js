const {Customers} = require('../db')
const customers = {}

async function create(name){
    const customer = await Customers.create({
        name: name
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function findAll(){
    const customer = await Customers.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function findByName(name){
    const customer = await Customers.findOne({ where: { name: name } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

customers.create = create
customers.findAll = findAll
customers.findByName = findByName

module.exports = customers