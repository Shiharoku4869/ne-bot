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
  bot.user.setGame('with Tanjiro nichan');
});


bot.on('message', async meg => {
  if (meg.author.bot || meg.channel.type === 'dm' || meg.channel.name !== 'welcome') return;
  let cnt = meg.content;
  if (cnt.startsWith('```') && cnt.endsWith('```'))
    verify(meg);
});

bot.on('message', async meg => {
  if (meg.channel.name !== 'polls') return;
  meg.react('⬆️');
  meg.react('⬇️');
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
