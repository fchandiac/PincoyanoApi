'use strict';
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Users extends Model { }
    Users.init({
        user_name: DataTypes.STRING,
        name: DataTypes.STRING,
        pass: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Users',
        underscored: true
    })
    return Users
}

