


module.exports = {
  name: 'luom',
  description: 'Dùng để lườm ai đó',
  usage: 'ne.luom [<member name>]',

  run: (meg, args) => {
    let metns = meg.mentions.users;
    let biLuom = [];

    metns.forEach(mt => {
      biLuom.push(mt);

    })
    args.forEach(h => {
      meg.guild.members.filter(m => m.user.username.toLowerCase().startsWith(h)).forEach(u => {
        biLuom.push(u.user);
      });
    });

    let cnt = `Ahihi, ${meg.author} đang lườm `;
    
    for (let i = 0; i < biLuom.length; i++) {
      if (i && i < biLuom.length - 1) cnt += ', ';
      else if (i == biLuom.length - 1 && i) cnt += ' và ';
      cnt += `<@${biLuom[i].id}>`;
    }
    if (biLuom.length) cnt += ' ';
    cnt += 'kìa.\n\n';
    for (let i = 0; i < 144; i++) {
      cnt += '😒 ';
      if ((i + 1) % 12 == 0) cnt += '\n';
    }
    meg.channel.send(cnt);
  }
}