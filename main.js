// add modules
const express = require('express');
const bodyParser = require('body-parser');
const getConfig = require("gh-get-config");
const db = require('ghc-db');
const errorLog = require("gh-logger");
const telegramBot = require("node-telegram-bot-api");

// set parameters for gh-get-config
getConfig('connect', __dirname, './config/mainConfig.json');

// get config parameters
const PORT = getConfig("PORT");
const textInitialization = getConfig("textInitialization");

// set parameters for error logger
errorLog.connect(__dirname, './error/errorLog.json');

// connect with database
try {
    const dbUrl = getConfig("dbUrl");
    const dbToken = getConfig("dbToken");
    db.connect(dbUrl, dbToken);
    console.log(`${textInitialization} database connection - success`)
} catch (err) {
    let error = {
        message: "Can not connect with database",
        error: err
    }
    console.log(textInitialization, error);
    errorLog.addLog(error);
    return;
}
// creating app
const app = express();

// add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api', require('./bin/routes'));
//app.use('/swagger', require('./bin/routes'));

// server listen
app.listen(PORT, function() {
    console.log(`${textInitialization} Server started on port ${PORT}`);
});