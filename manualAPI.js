const axios = require('axios')

const { BOT_TOKEN } = require('./config')

const instance = axios.create({
  baseURL: `https://api.telegram.org/bot${BOT_TOKEN}/`,
  timeout: 1000,
});


module.exports = {
  reactWithClownEmoji: async (ctx) => {
    const chat_id = ctx.message.chat.id
    const message_id = ctx.message.message_id

    await instance.post('/setMessageReaction', {
      chat_id,
      message_id,
      reaction: [{
        type: 'emoji',
        emoji: '🤡'
      }],
      is_big: true
    })
  }
}
