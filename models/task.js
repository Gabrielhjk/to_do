const { DataTypes } = require('sequelize')
const db = require('../db')

export const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING(200),
        require: true,
        allowNull: false
    }
})