module.exports = {
  name: 'icon',
  description: 'Hiển thị toàn bộ icon của server',
  usage: 'ne.icon',

  run: (meg, args) => {
    let icons = [];
    
    meg.guild.emojis.forEach(e => icons.push({name: e.name, id: e.id}));

    for (let i = 0; i < icons.length; i += 25) {
      let cnt = {
        color: 0x0099ff,
        title: 'Server\'s icons',
        description: `All icons in server ${meg.guild.name}`,
        fields: [],
      };

      for (let j = 0; i + j < icons.length && j < 25; j++) {
        cnt.fields.push({name: `<:${icons[i + j].name}:${icons[i + j].id}>`, value: `\`:${icons[i + j].name}:\``, inline: true});
      }
      meg.channel.send({embed: cnt});
    }
  }
}
