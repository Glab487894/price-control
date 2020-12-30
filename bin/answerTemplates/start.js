const db = require('ghc-db');

const startTemplate = async () => {
    let dbDataText = {
        path: "./responseTemplates/start",
        name: "text.txt"
    }
    let returnText = await db.readFile(dbDataText);

    let dbDataMarkup = {
        path: "./responseTemplates/start",
        name: "markup.json"
    }
    let returnMarkup = await db.readJson(dbDataMarkup);

    return({
        text: returnText,
        markup: returnMarkup
    });
}

module.exports = startTemplate;
