const discord = require('discord.js');
const fs = require('fs');
const {token, prefix} = require('./config');
const verify = require('./verify.js');
const cBWs = require('./checkBadWords.js');


const bot = new discord.Client({ displayall: false});
bot.cmds = new discord.Collection();

const cmdPath = './cmds';

const cmdFiles = fs.readdirSync(`${cmdPath}`).filter(f => f.endsWith('.js'));

cmdFiles.forEach(f => {
  let cmd = require(`${cmdPath}/${f}`);
  bot.cmds.set(cmd.name, cmd);
});

bot.on('ready', async () => {
  console.log(`${bot.user.username} is online`);
  bot.user.setGame('with Sher');
});


bot.on('message', async meg => {
  if (meg.author.bot || meg.channel.type === 'dm' || meg.channel.name !== 'welcome') return;
  let cnt = meg.content;
  if (cnt.startsWith('```') && cnt.endsWith('```'))
    verify(meg);
});


bot.on('message', async meg => {
  if (!meg.content.startsWith('ne.test')) return;
  // console.log('member: ', meg.member);
  // meg.channel.send(meg.member.hasPermission('MANAGE_MESSAGES'));
  // console.log(meg.author.avatarURL);
  // meg.channel.send(`${meg.author.createdAt}`);

  // let day = (Date.parse(Date()) - Date.parse(meg.author.createdAt)) / (1000 * 60 * 60 * 24);
  // day = Math.round(day);
  // console.log(day);

  console.log(bot.guilds.find(g => g.name === 'Test2').members);

});

bot.on('message', async meg => {

  if (meg.author.bot) return;

  if (cBWs.check(meg.content))
    return cBWs.flag(meg);
  
  let args = meg.content.split(' ');
  let cmd = args[0].toLowerCase();
  args.shift();

  if (!cmd.startsWith(`${prefix}`)) return;

  cmd = cmd.substr(prefix.length);
  if (cmd === 'test') return;
  if (!bot.cmds.has(cmd)) {
    return meg.reply(`Không có lệnh \`${cmd}\` rồi bạn ơi. \:cry:\nGõ \`ne.help\` để xem danh sách các câu lệnh nha. 😙`);
  }
  bot.cmds.get(cmd).run(meg, args, bot);

});

// bot.login(token);
bot.login(process.env.token);