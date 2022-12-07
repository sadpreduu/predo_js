
const {SlashCommandBuilder} = require ('discord.js');

module.exports = {
       data: new SlashCommandBuilder()
            .setName ('sleep')
            .setDescription('Alice will sleep'),
        async execute(interaction){

              await interaction.reply('Eu preciso dormir?');
              await (15);
              await interaction.followup('Preciso Mesmo?')      
        },        
};


