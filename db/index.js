import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize ('weather', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})