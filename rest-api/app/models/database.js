// ======= Database Js
const mysql = require('mysql');

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB
});

db.connect(err => {
	if(err)
		console.log(err);
	else
		console.log('Database has been connected');
});

module.exports = db;