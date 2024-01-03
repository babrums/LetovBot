const filterFields = (obj) => {
  const { is_premium, is_bot, language_code, all_members_are_administrators, type, ...props } = obj
  return props
}

module.exports = (ctx) => {
  const { from, chat, text, message_id } = ctx.message

  const rawGroup = filterFields(chat)
  const rawUser = filterFields(from)

  const data = {}

  for (const field of Object.keys(rawUser)) data[`user_${field}`] = rawUser[field]
  for (const field of Object.keys(rawGroup)) data[`group_${field}`] = rawGroup[field]


  console.log(JSON.stringify({ message_id, ...data, text }))
}
