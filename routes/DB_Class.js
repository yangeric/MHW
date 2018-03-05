// 
var db_config      = require('./DB_Config');
    
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : db_config.host,
    user     : db_config.user,
    password : db_config.password,
    database : db_config.database,
    port     : db_config.port,
    multipleStatements: true
});

    connection.connect();
//連接池
var pool  = mysql.createPool({
    user    : db_config.user,
    password: db_config.password,
    host    : db_config.host,
    port    : db_config.port,
    database: db_config.database,
    // 無可用連線時是否等待pool連線釋放(預設為true)
    waitForConnections : true,
    // 連線池可建立的總連線數上限(預設最多為10個連線數)
    connectionLimit : db_config.limit
});

module.exports = {
connection:connection,
end:connection.end,
pool:pool
}
