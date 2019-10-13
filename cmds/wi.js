module.exports = {
  name: 'wi',
  description: 'Tự sướng cùng với bot',
  usage: 'ne.wi <content>',

  run: (meg, args) => {
    meg.delete(0);
    console.log(meg.author.username, meg.content);

    if (!args.length)
      return meg.reply('Kêu người ta nói mà không nói gì, ghét. <:nezuko:630439565370327050>');
    
    meg.channel.send(args.join(' '));

  }
}