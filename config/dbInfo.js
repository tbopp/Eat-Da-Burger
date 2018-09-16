exports.mySQLserver = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};

exports.myJAWSDBserver = {
    url: process.env.JAWSDB_URL,
    host: process.env.JAWSDB_HOST,
    port: process.env.JAWSDB_PORT,
    user: process.env.JAWSDB_USER,
    password: process.env.JAWSDB_PASSWORD,
    database: process.env.JAWSDB_DATABASE
};