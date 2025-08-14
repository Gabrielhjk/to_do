const { DataTypes } = require('sequelize')
const db = require('../db/db')

const User = require('./User')

export const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING(200),
        require: true,
        allowNull: false
    }
})

Task.belongsTo(User)
User.hasMany(Task)