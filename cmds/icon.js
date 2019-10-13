module.exports = {
  name: 'icon',
  description: 'Hiển thị toàn bộ icon của server',
  usage: 'ne.icon',

  run: (meg, args) => {
    let cnt = {
      color: 0x0099ff,
      title: 'Server\'s icons',
      description: `All icons in server ${meg.guild.name}`,
      fields: [],
    };
    meg.member.guild.emojis.forEach(e => cnt.fields.push({name: `<:${e.name}:${e.id}>`, value: `\`:${e.name}:\``, inline: true}));
    meg.channel.send({embed: cnt});
    // console.log(cnt);
  }
}