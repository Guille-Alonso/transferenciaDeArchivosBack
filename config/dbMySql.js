const mysql = require('mysql2/promise');

const conectarBDMySql = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DB,
        });
        return connection
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = { conectarBDMySql} 