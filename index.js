const { Telegraf } = require('telegraf')

const { BOT_TOKEN, CLOWN_IDS = [] } = require('./config')

const genOborona = require('./stringGenerator.js')
const log = require('./logger.js')
const { reactWithClownEmoji } = require('./manualAPI.js')

const bot = new Telegraf(BOT_TOKEN)

function processMsg (ctx) {
    if (CLOWN_IDS.includes(ctx.message.from.id)) reactWithClownEmoji(ctx)
    if (!ctx?.message?.text?.match(/(о|О|o|O){3,}/g)) return
    ctx.reply(`ооО, моя оборона\n${genOborona()}`)
    log(ctx)
}

bot.on('message', processMsg)

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
