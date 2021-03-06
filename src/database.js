const mysql = require('mysql');
const dbConfig = require('./config/db');

// DB Connection
var pool = mysql.createPool(dbConfig);

exports.query = function () {
    var queryArgs = Array.prototype.slice.call(arguments),
        events = [],
        eventNameIndex = {};

    pool.getConnection(function (err, conn) {
        if (err) {
            console.log("Database Connection Failed")
            console.log(err);
            if (eventNameIndex.error) {
                eventNameIndex.error();
            }
        }
        if (conn) { 
            console.log("Database Connection Successful")
            var q = conn.query.apply(conn, queryArgs);
            q.on('end', function () {
                conn.release();
            });

            events.forEach(function (args) {
                q.on.apply(q, args);
            });
        }
    });

    return {
        on: function (eventName, callback) {
            events.push(Array.prototype.slice.call(arguments));
            eventNameIndex[eventName] = callback;
            return this;
        }
    };
};
