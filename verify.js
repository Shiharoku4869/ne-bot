module.exports = (meg) => {
  var nd = `Chúc mừng bạn ${meg.author} đã xác nhận thành công \:heart_eyes: \:heart_eyes:\n`
  + `Mong bạn có thời gian vui vẻ với server này. `;
  let rMem = meg.guild.roles.find(r => r.name === 'Member' || r.name === 'Mem');
  // console.log(rMem);
  
  meg.member.addRole(rMem.id, 'Verified');
  return meg.channel.send(nd);
}