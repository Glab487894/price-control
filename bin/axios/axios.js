const axios = require('axios');
const errorLog = require('gh-logger');
const getConfig = require('gh-get-config');

const sender = async(data) => {
    try {
        const token = getConfig('telegramBotToken');
        let url = `https://api.telegram.org/bot${token}/sendMessage`;
        const config = {
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        return await axios(config)
    }catch(err){
        let arr = {
            message: "Can not send request to telegram bot api",
            error: err
        }
        errorLog.addLog(arr);
        return arr;
    }
}

module.exports = {
    requestToTelegram(userTelegramId, text, markup){
        const data = JSON.stringify({
            "chat_id": userTelegramId,
            "text": text,
            "reply_markup": markup
        });

        return sender(data);
    }
}
