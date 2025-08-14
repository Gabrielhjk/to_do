const db = require('../db/db')
const { DataTypes } = require('sequelize')

export const User = db.define('User', {
    name: {
        type: DataTypes.STRING(100),
        require: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(20),
        require: true,
        allowNull: false
    }
})