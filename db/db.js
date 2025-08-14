const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('to_do', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'    
})

try {
    sequelize.authenticate()
    console.log('Database connected successfully')
} catch (err) {
    console.log(err)
}

module.exports = sequelize