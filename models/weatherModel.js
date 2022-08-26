import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Weather = sequelize.define('locations', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    temp: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    feelTemp: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cond: {
        type: Sequelize.STRING,
        allowNull: false
    },
    humidity: {
        type: Sequelize.STRING,
        allowNull: false
    }
})