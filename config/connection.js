// Requiring database info from dbInfo.js file, which has database specific information referenced from a local .env file
const dbInfo = require("./dbInfo.js");

// Set up MySQL connection.
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: dbInfo.host,
        port: dbInfo.port,
        user: dbInfo.user,
        password: dbInfo.password,
        database: dbInfo.database
    });
};

// Make connection.
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;