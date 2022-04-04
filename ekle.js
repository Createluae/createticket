module.exports = {
    name: 'ekle',

    execute(client, message) {
var args = message.content.slice(".ekle".length).trim().split(' ');
       const kisi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if (!kisi) return message.reply({content: `Belirttiğin kullanıcıyı sunucuda bulamıyorum!`})
if (kisi.permissionsIn(message.channel).has("VIEW_CHANNEL") === false) {
message.channel.permissionOverwrites.edit(kisi, {VIEW_CHANNEL: true, SEND_MESSAGES: true, ATTACH_FILES: true})
message.reply({content: `${kisi} adlı kişi talebe eklendi!`})
} else {
message.reply({content: `:x: ${kisi} adlı kişi bu talebe zaten eklenmiş!`}) 
}
    },
};