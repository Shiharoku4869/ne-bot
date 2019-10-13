module.exports = {
  name: 'say',
  description: 'Dùng để nói điều gì đó',
  usage: 'ne.say <content>',
  run: (meg, args) => {
    meg.delete(0);
    console.log(meg.content);
    // if (meg.author.id === '511172348171386880')
    //   return meg.reply('Không nhắc lại lời mày nữa đâu. 😤');

    if (!args.length)
      return meg.reply('Kêu người ta nói mà không nói gì, ghét. <:nezuko:630439565370327050>');
    
    let say = {
      color: 0x3d87ff,
      
      author: {
        name: meg.author.username,
        icon_url: meg.author.avatarURL,
      },

      fields: [
        {
          name: '\u200b',
          value: args.join(' '),
          inline: true,
        },
      ],
      // footer: {
      //   text: meg.author.username,
      //   icon_url: meg.author.avatarURL,
      // }
    }

    return meg.channel.send({embed: say});
  }
};