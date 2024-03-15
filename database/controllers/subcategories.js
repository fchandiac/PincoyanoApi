const { Subcategories, Categories} = require('../db')
const subcategories = {}


async function create(name, description, category_id) {
    const subcategorie = await Subcategories.create({
        name: name,
        description: description,
        category_id: category_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategorie
}

async function findAll() {
    const subcategories = await Subcategories.findAll({
        include: {
            model: Categories
        }

    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategories
}

async function findAllByCategory(category_id) {
    const subcategories = await Subcategories.findAll({
        where: {
            category_id: category_id
        },
        include: {
            model: Categories
        }

    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategories
}

async function findAllById(id) {
    const subcategorie = await
        Subcategories.findOne({
            where: {
                id: id
            },
            include: {
                model: Categories
            }
        }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategorie
}

async function findOneByName(name) {
    const subcategorie = await
        Subcategories.findOne({
            where: {
                name: name
            },
            include: {
                model: Categories
            }
        }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategorie
}

async function update(id, name, description, categoryId) {
    const subcategorie = await Subcategories.update({
        name: name,
        description: description,
        categoryId: categoryId
    }, {
        where: {
            id: id
        }   
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategorie
}

async function remove(id) {
    const subcategorie = await Subcategories.destroy({
        where: {
            id: id
        }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategorie
}

subcategories.create = create
subcategories.findAll = findAll
subcategories.findAllByCategory = findAllByCategory
subcategories.findOneByName = findOneByName
subcategories.findAllById = findAllById
subcategories.update = update
subcategories.remove = remove

module.exports = subcategories
