import {Sequelize} from 'sequelize'


const db = new Sequelize('database_comments', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db