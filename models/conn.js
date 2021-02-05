'use strict';

const host = 'localhost',
    database = 'album_review';

const pgp = require('pg-promise')({
    query: function (event) {
        console.log('QUERY: ', event.query)
    }
});

const options = {
    host, 
    database
}

const db = pgp(options);

module.exports = db;