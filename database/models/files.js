'use strict';
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Files extends Model { }
    Files.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING(600),
        user_id: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Files',
        underscored: true
    })
    return Files
}

