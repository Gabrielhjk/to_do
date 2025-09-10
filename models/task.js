const { DataTypes } = require('sequelize')
const db = require('../db/db')

const User = require('./User')

const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING(),
        require: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(),
    }
})

Task.belongsTo(User)
User.hasMany(Task)

module.exports = Task