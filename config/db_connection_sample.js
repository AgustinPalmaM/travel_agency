import Sequelize from "sequelize";

const db = new Sequelize('your database name', 'your user', 'your password', {
  host: 'your hostname here',
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
});

export default db;