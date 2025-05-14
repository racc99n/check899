const axios = require('axios');

async function sendTelegramMessage(message) {
  const TELEGRAM_BOT_TOKEN = '7262919540:AAGI3eFZUdOOYUVOxF_8vqLGhZz1eIDuNiI';
  const TELEGRAM_CHAT_ID = '-1002474123477';
  await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
  });
}
