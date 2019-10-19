let bws =  ['vl', 'vcl', 'wtf', 'dm', 'đcm', 'dcm', 'đm', 'cmm', 'cmn', 'fuck', 'diss', 'cc', 'lồn.', 'lồn ', 'buồi', 'cặc'];

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
      let rMem = meg.guild.roles.find(r => r.name === 'Member' || r.name === 'Mem');
      meg.member.removeRole(rMem.id, 'chử bậy nhiều');
      meg.guild.channels.find(c => c.name === 'mod-logs').send(`Thành viên ${meg.author} bị xóa role ${rMem.name} do chử bậy nhiều`);
    }
    fs.writeFileSync('./mod-logs.json', JSON.stringify(lg, null, 2));
  },

  check: s => {
    for (let w of bws) {
      if (s.toLowerCase().includes(w))
        return true;
    }
    return false;
  }
}
