const {Sellers} = require('../db');
const sellers = {}

async function create(code, name){
    const seller = await Sellers.create({
        code: code,
        name: name
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return seller
}

async function findAll(){
    const seller = await Sellers.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return seller
}

async function findByName(name){
    const seller = await Sellers.findOne({ where: { name: name } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return seller
}

async function findByCode(code){
    const seller = await Sellers.findOne({ where: { code: code } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return seller
}

async function updateName(id, name){
    const seller = await Sellers.update({ name: name }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return seller
}


sellers.create = create
sellers.findAll = findAll
sellers.findByName = findByName
sellers.findByCode = findByCode
sellers.updateName = updateName

module.exports = sellers