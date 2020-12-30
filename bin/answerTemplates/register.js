const db = require('ghc-db');

const registerTemplate = async () => {
    let dbDataMarkup = {
        path: "./responseTemplates/register/registerTypeChoice",
        name: "markup.json"
    }
    let returnMarkup = await db.readJson(dbDataMarkup);

    let dbDataText = {
        path: "./responseTemplates/register/registerTypeChoice",
        name: "text.txt"
    }
    let returnText = await db.readFile(dbDataText);

    return ({
        markup: returnMarkup,
        text: returnText
    });
}

module.exports = registerTemplate;