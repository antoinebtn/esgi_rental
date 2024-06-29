import Sequelize from 'sequelize';
import 'dotenv/config'

const db = {};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_USER_PASSWORD, {
    host: 'localhost',
    dialect: 'mariadb',
    port: 40000
});

export { sequelize, Sequelize };