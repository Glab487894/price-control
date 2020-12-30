const getConfig = require('gh-get-config');
const axios = require('../axios/axios');
const inputMessageAnalysis = require('../functions/inputMessageAnalysis');

module.exports = {
    get(req, res){
        const heading = getConfig("textInfo");
        console.log(`${heading} webhook has been set`);
        res.status(200).send('OK');
    },
    async post(req, res){
        let userTelegramId = req.body.message.from.id;
        let inputMessage = req.body.message.text;
        let fullInfo = req.body.message
        console.log(1);
        let response = await inputMessageAnalysis(inputMessage, fullInfo);

        let textResponse;
        if(response.text) textResponse = response.text
        else textResponse = "";

        let markupResponse;
        if(response.markup) markupResponse = response.markup.reply_markup
        else markupResponse = "";

        await axios.requestToTelegram(userTelegramId, textResponse, markupResponse);
        //await axios.markupRequest(userTelegramId);
        res.status(200).send('OK');
    }
}