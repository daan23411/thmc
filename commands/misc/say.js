const {MessageEmbed} = require('discord.js');
module.exports={
    name:'say',
    category: 'misc',
    aliases: ['zeg'],
    description: 'Zeg iets leuks.',
    usage: '<bericht>',
    run: async(bot,message,args)=>{
      const sayMessage = args.join(" ");
      if(!sayMessage) {
        return message.channel.send('Geef een bericht op. Ik kan geen bericht versturen als er niks in staat 😄')
    }
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send('❌ Je hebt geen permissie om dit command uit te voeren')
    }
      message.delete().catch(err => console.log(err));
      message.channel.send(sayMessage);
    }
}