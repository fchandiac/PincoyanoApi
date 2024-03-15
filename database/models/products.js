const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Products extends Model { }
    Products.init({
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        subcategory_id: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Products',
        underscored: true
    })
    return Products
}

