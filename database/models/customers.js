const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Customers extends Model { }
    Customers.init({
        name: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Customers',
        underscored: true
    })
    return Customers
}

