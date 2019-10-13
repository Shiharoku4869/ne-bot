// const Embed = require('discord.js').RichEmbed;

module.exports = {
  name: 'help',
  description: 'Danh sách các lệnh của Nezuko. <:nezuko:630439565370327050>',
  usage: 'ne.help <cmd>',

  run: (meg, args, bot) => {
    // if (!args.length) {
    //   let cmd = bot.cmds;
    //   let em = new Embed()
    //   .setColor('#0099ff')
    //   .setTitle('Nezuko')
    //   .setURL('https://kimetsu-no-yaiba.fandom.com/wiki/Nezuko_Kamado')
    //   // .setAuthor('Nezuko', 'https://imgur.com/2sGciTK.jpg')
    //   .setDescription('Danh sách các lệnh của Nezuko')
    //   .setThumbnail('https://i.imgur.com/BnDsoJ0.jpg')
    //   .addBlankField();
    //   // .attachFiles(['./imgs/nezuko.jpg'])
      
    //   cmd.filter(v => v.name !== 'help').forEach(v => em.addField(`${v.name}: ${v.description}`, v.usage));

    //   em.setTimestamp()
    //   .setFooter('Nezuko', 'https://imgur.com/2sGciTK.jpg');
    //   meg.channel.send(em);
    // }
    let cmd = bot.cmds;
    let listcmds = [
      {
        name: '\u200b',
        value: '\u200b'
      }
    ];
    cmd.filter(c => c.name !== 'help').forEach(c => {
      listcmds.push({name: `${c.name}: ${c.description}`, value: c.usage});
    });
    let em = {
      color: 0x0099ff,
      title: 'Nezuko',
      url: 'https://kimetsu-no-yaiba.fandom.com/wiki/Nezuko_Kamado',
      description: 'Danh sách các lệnh của Nezkuo',
      thumbnail: {
        url: 'https://i.imgur.com/BnDsoJ0.jpg',
      },
      fields: listcmds,
      timestamp: new Date(),
      footer: {
        text: 'Nezuko',
        icon_url: 'https://imgur.com/2sGciTK.jpg'
      }
    }
    meg.channel.send({embed: em});
  }
}