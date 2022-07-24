const { Telegraf } = require('telegraf')

const config = require('./config')
const bot = new Telegraf(config.BOT_TOKEN)

const genStr = [
    [
        'солнечный',
        'траурный',
        'плюшевый',
        'бешеный',
        'памятный',
        'трепетный',
        'базовый',
        'скошенный',
        'преданный',
        'ласковый',
        'пойманный',
        'радужный',
        'огненный',
        'радостный',
        'тензорный',
        'шёлковый',
        'пепельный',
        'ламповый',
        'жареный',
        'загнанный',
        'кукольный',
        'кластерный',
        'ропотный',
        'квантовый',
        'мраморный',
        'газовый',
        'пьезовый',
    ],
    [
        'трактор',
        'зайчик',
        'Верник',
        'глобус',
        'ветер',
        'щавель',
        'пёсик',
        'копчик',
        'ландыш',
        'стольник',
        'мальчик',
        'дольшик',
        'Игорь',
        'невод',
        'егерь',
        'пончик',
        'лобстер',
        'жемчуг',
        'кольщик',
        'йогурт',
        'овод',
        'пьезо',
    ],
    [
        'стеклянного',
        'ванильного',
        'резонного',
        'широкого',
        'дешёвого',
        'горбатого',
        'собачьего',
        'исконного',
        'волшебного',
        'картонного',
        'лохматого',
        'арбузного',
        'огромного',
        'запойного',
        'великого',
        'бараньего',
        'вандального',
        'едрёного',
        'парадного',
        'укромного',
        'пьезового',
    ],
    [
        'пупса',
        'глаза',
        'плова',
        'Пельша',
        'мира',
        'деда',
        'жира',
        'мема',
        'ада',
        'бура',
        'жала',
        'нёба',
        'гунна',
        'хлама',
        'шума',
        'воза',
        'сала',
        'фена',
        'зала',
        'рака',
        'Глеба',
        'мёда',
        'неба',
        'хлеба',
        'хлама',
    ],
]

function genOborona() {
    let res = ''
    genStr.forEach(list => { res += list[Math.floor(Math.random() * list.length)] + ' ' })
    return res
}

bot.on('text', (ctx) => {
    // if (!config.WHITELIST.includes(ctx.message.from.id)) return ctx.reply(`Здравствуйте. А вы кто? Я общаюсь только с Вагачатом и Лёвой`)
    const { first_name, username, last_name } = ctx.message.from
    if (ctx.message.text.match(/(о|О|o|O){3,}/g)) {
        console.time(`Message from ${first_name} ${last_name} (@${username})\t"${ctx.message.text}"`)
        ctx.reply(`ооО, моя оборона\n${genOborona()}`)
        console.timeEnd(`Message from ${first_name} ${last_name} (@${username})\t"${ctx.message.text}"`)
    }
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
