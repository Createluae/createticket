module.exports = {
    name: 'çıkar',

    execute(client, message) {
       const kisi = message.mentions.members.first()
if (!kisi) return message.reply({content: `Belirttiğin kullanıcıyı sunucuda bulamıyorum!`})
if (kisi.permissionsIn(message.channel).has("VIEW_CHANNEL") === true) {
message.channel.permissionOverwrites.edit(kisi, {VIEW_CHANNEL: false, SEND_MESSAGES: false, ATTACH_FILES: false})
message.reply({content: `${kisi} adlı kişi talepten çıkartıldı!`})
} else {
message.reply({content: `:x: ${kisi} adlı kişi bu talepten zaten çıkartılmış!`}) 
}
    },
};