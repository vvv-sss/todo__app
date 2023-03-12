const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "TODO App API",
			version: "1.0.0",
			description: "Express Library API for TODO App",
		},
		servers: [
			{
				url: "http://localhost:8000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the universe.',
}));

module.exports = app;