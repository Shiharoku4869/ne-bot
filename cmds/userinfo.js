module.exports = {
  name: 'userinfo',
  description: 'Hiển thị thông tin người dùng',
  usage: 'ne.userinfo [<member name>]',

  run: (meg, args) => {
    let mnts = meg.mentions.users;
    let users = [];

    mnts.forEach(mt => {
      users.push(mt);

    })
    args.forEach(h => {
      meg.guild.members.filter(m => m.user.username.toLowerCase().startsWith(h)).forEach(u => {
        users.push(u.user);
      });
    });

    let user;
    if (users.length) {
      user = users[0];
    } else {
      user = meg.author;
    }

    let em = {
      color: 0x3d87ff,
      author: {
        name: user.username,
        icon_url: user.avatarURL,
      },
      thumbnail: {
        url: user.avatarURL,
      },
      fields: [
        {
          name: `Tên người dùng: `,
          value: `${user.username}#${user.discriminator}`,
          inline: true,
        },
        {
          name: `Mã số: `,
          value: `${user.id}`,
          inline: true,
        },
        {
          name: `Tạo tài khoản lúc: `,
          value: `${user.createdAt}`,
          inline: true,
        },
        {
          name: `Tham gia server vào: `,
          value: `${meg.guild.joinedAt}`,
        },
        {
          name: `Trạng thái: `,
          value: `${user.presence.status}`,
        }
      ],
      footer: {
        text: 'Nezuko',
        icon_url: 'https://imgur.com/2sGciTK.jpg',
      }
    }

    meg.channel.send({embed: em});
  }
}