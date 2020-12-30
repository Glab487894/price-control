const startTemplate = require('../answerTemplates/start');
const registerTemplate = require('../answerTemplates/register');

const inputMessageAnalysis = async(inputMessage, fullInfo) => {
    if(inputMessage == "/start") return await startTemplate()
    else if(inputMessage == "Register") return await registerTemplate()
    else if(inputMessage == "Register as your telegram account") return{text:"OK"}, console.log(fullInfo)
    else return {text: "No scenario"}

}

module.exports = inputMessageAnalysis;