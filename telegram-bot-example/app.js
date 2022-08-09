const TelegramBot = require('node-telegram-bot-api');
const web3 = require('./web3');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
bot.on("polling_error", (msg) => console.log(msg));
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    let text = msg.text ? msg.text : '';

    if (text.includes('/getLatestBlock')) {
        const block = await web3.getBlock();
        bot.sendMessage(chatId, 'Latest blockhash: ' + block.hash);
    }
});
