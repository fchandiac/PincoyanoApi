'use strict';
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Sales extends Model { }
    Sales.init({
        invoice: DataTypes.STRING,
        quanty: DataTypes.INTEGER,
        price: DataTypes.FLOAT,
        discount: DataTypes.FLOAT,
        return_: DataTypes.INTEGER,
        total_return: DataTypes.INTEGER,
        total_sale: DataTypes.FLOAT,
        total: DataTypes.FLOAT,
        product_id: {type: DataTypes.INTEGER},
        customer_id: {type: DataTypes.INTEGER,},
        seller_id: {type: DataTypes.INTEGER },
        // seller_code: {type: DataTypes.INTEGER },
        file_id: {type: DataTypes.INTEGER },
        date: {type: DataTypes.DATE},

    }, {
        sequelize,
        modelName: 'Sales',
        underscored: true
    })
    return Sales
}