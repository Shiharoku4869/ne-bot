let bws =  ['vl', 'vcl', 'wtf', 'dm', 'đcm', 'dcm', 'đm', 'cmm', 'cmn', 'fuck', 'diss', 'cc', 'lồn.', 'lồn ', 'buồi', 'cặc'];

module.exports = {
  flag: (meg) => {
    meg.react('🏴');
    meg.channel.send(`${meg.author} vừa chửi bậy kìa, một \:flag_black: nè, Ahihi.`);
  },

  check: s => {
    for (let w of bws) {
      if (s.toLowerCase().includes(w))
        return true;
    }
    return false;
  }
}
