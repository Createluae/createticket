const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'setup',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Bu komutu kullanmak için **mesajları yönetme** iznine sahip olmanız gerekir');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('GREEN');
        setupEmbed.setAuthor('Bilet sistemi');
        setupEmbed.setDescription('**Bir bilet oluşturmak için aşşağıdaki butona tıklayın**');
        setupEmbed.setFooter(`Yetkililer ile konuşmanız için yeni bir kanal oluşturulacak!`)
		setupEmbed.setFooter(`Heaxy Studios`)

        const ticketButton = new MessageButton();

        ticketButton.setEmoji('🔓');
        ticketButton.setStyle('SUCCESS');
        ticketButton.setLabel('Bilet Oluştur');
        ticketButton.setCustomId('createTicket');

        const row = new MessageActionRow().addComponents(ticketButton);

        message.channel.send({ embeds: [setupEmbed], components: [row] });
    },
};