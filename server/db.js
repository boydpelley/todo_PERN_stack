const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "D4lP0st#04",
    host: "localhost",
    port: 5432,
    databaseName: "todopern"
});

module.exports = pool;