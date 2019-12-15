let {bws} = require('./badwords.json');

const fs = require('fs');

module.exports = {
  flag: (meg) => {
    meg.react('🏴');
    meg.channel.send(`${meg.author} vừa chửi bậy kìa, một \:flag_black: nè, Ahihi.`);

    let lg = {};
    try {
      lg = require('./mod-logs.json');
    } catch {

    }
    let id = meg.author.id;
    if (lg.hasOwnProperty(`${id}`))
      lg[`${id}`]++;
    else
      lg[`${id}`] = 1;

    if (lg[`${id}`] % 5 == 0) {
      if (meg.member.roles.find(r => {
        let name = r.name.toLowerCase();
        return name === 'mem' || name === 'member';
      }) == null) return meg.channel.send(`${meg.author} không có role member để xóa :(.`);

      let rMem = meg.guild.roles.find(r => r.name === 'Member' || r.name === 'Mem');
      meg.member.removeRole(rMem.id, 'chử bậy nhiều');
      meg.guild.channels.find(c => c.name === 'mod-logs').send(`Thành viên ${meg.author} bị xóa role ${rMem.name} do chử bậy nhiều`);
    }
    fs.writeFileSync('./mod-logs.json', JSON.stringify(lg, null, 2));
  },

  check: s => {
    for (let w of bws) {
      let re = new RegExp(`([^a-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]|^|\W)${w}([^a-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]|\W|$)`, 'gi');
      if (re.test(s)) {
        return true;
      }
    }
    return false;
  }
}
