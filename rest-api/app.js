// ======= APP JS
const express = require('express');
const dotenv  = require('dotenv');
const cors    = require('cors');;

// init app
const app     = express();

// setup dotenv
dotenv.config({ path: './app/.env' });

// setup url encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// init PORT
const PORT = process.env.PORT || 3000;

// setup cors
const whiteList = [
	'http://localhost:8080',
	'http://192.168.1.30:8080'
];

const corsOption = {
	origin: function(origin, callback) {
		if( whiteList.indexOf(origin) !== -1 || !origin ) {
			callback(null, true);
		} else {
			callback(new Error('Blocked By Cors'));
		}
	}
}

app.use(cors(corsOption));

app.use('/api', require('./app/routes/pages'));

app.listen(PORT, () => console.log(`Web Service running on http://127.0.0.1:${PORT}/api`));
