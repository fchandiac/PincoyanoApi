const {Products, Categories, Subcategories} = require('../db')
const products = {}

async function create(code, name, subcategory_id){
    const product = await Products.create({
        code: code,
        name: name,
        subcategory_id: subcategory_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return product
}

async function findAll(){
    const product = await Products.findAll({
        include: [
            {
                model: Subcategories,
                include: [
                    {
                        model: Categories
                    }
                ]
            }
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return product
}

async function findOneByName(name){
    const product = await Products.findOne({ 
        where: { name: name },
        include: [
            {
                model: Subcategories,
                include: [
                    {
                        model: Categories
                    }
                ]
            }
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return product
}

async function update(id, code, name, subcategory_id){
    const product = await Products.update({
        code: code,
        name: name,
        subcategory_id: subcategory_id
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return product
}





products.create = create
products.findAll = findAll
products.findOneByName = findOneByName
products.update = update

module.exports = products