module.exports = {
  name: 'del',
  description: 'Xóa các tin nhắn',
  usage: 'ne.del <number>',

  run: (meg, args) => {
    if (!meg.member.hasPermission('MANAGE_MESSAGES')) // 'ADMINISTRATOR'
        return meg.reply('Bạn không phải mod rồi, không cho xóa. <:nezuko:630439565370327050>');

    if (args.length < 1)
      return meg.reply('Không nhập số tin nhắn cần xóa kìa.');
    let num = parseInt(args[0]);
    if (isNaN(num))
      return meg.reply('Không phải số rồi bạn ơi.');
    if (num < 1 || num >= 100)
      return meg.reply('Xóa tầm 1 đến 100 tin thôi nhé.');
    try {
        meg.channel.bulkDelete(num, true);
    }
    catch {
        meg.reply(`Không xóa được ${num} tin nhắn rồi. \:cry:`);
    }
  }
};