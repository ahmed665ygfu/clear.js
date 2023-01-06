const Discord = require("discord.js")
const { Client, Message, EmbedBuilder,PermissionsBitField, MessageActionRow, MessageButton } = require("discord.js")
const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: "clear",
    description: "clear message 😁",
    options: [{

        name:"amount",
        description: " number of message",
        type: ApplicationCommandOptionType.Integer,
        maxValue: 100,
        required: true

    }

    ],
    ///// made by Ahmed wageh sarhan 

    run: async (interaction, client) => {


        
        let number = interaction.options.getInteger("amount")

        const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`Done 👌Deleted ${number} message / messages`)

        await interaction.channel.bulkDelete(number)

        return await interaction.deferReply({ ephemeral: true, fetchReply: true }), await interaction.editReply({ embeds: [embed] })








    }


}
