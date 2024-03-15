const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Sellers extends Model { }
    Sellers.init({
        code: DataTypes.STRING,
        name: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Sellers',
        underscored: true
    })
    return Sellers
}

