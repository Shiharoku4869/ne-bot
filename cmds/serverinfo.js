module.exports = {
  name: 'serverinfo',
  description: 'Hiển thị thông tin server',
  usage: 'ne.serverinfo',

  run: (meg, args) => {
    let online = meg.guild.members.filter(member => member.user.presence.status !== 'offline');
    let serverCreated = meg.guild.createdAt.toString().split(' ');
    let bot = meg.guild.members.filter(m => m.user.bot);

    meg.channel.send({
      embed: {
        color: 0x3d87ff,
        author: {
          name: meg.guild.name,
          icon_url: meg.guild.iconURL
        },
        thumbnail: {
          url: meg.guild.iconURL,
        },
        fields: [
          {
            name: 'Tạo server lúc: ',
            value: serverCreated.join(', ')
          },
          {
            name: 'Tên server: ',
            value: meg.guild.name,
            inline: true
          },
          {
            name: 'ID: ',
            value: meg.guild.id,
            inline: true
          },
          {
            name: 'Chủ server: ',
            value: meg.guild.owner.user.tag,
            inline: true
          },
          {
            name: 'Tổng số thành viên: ',
            value: meg.guild.memberCount,
            inline: true
          },
          {
            name: 'Tổng số người: ',
            value: meg.guild.memberCount - bot.size,
            inline: true
          },
          {
            name: 'Tổng số bot: ',
            value: bot.size,
            inline: true
          },
          {
            name: 'Tổng số người online: ',
            value: online.size - bot.size,
            inline: true
          }
        ],
        timestamp: new Date(),
        footer: {
          text: 'Nezuko',
          icon_url: 'https://imgur.com/2sGciTK.jpg',
        }
      }
    });
  }
}