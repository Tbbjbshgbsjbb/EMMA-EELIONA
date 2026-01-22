const delay = (ms) => new Promise(res => setTimeout(res, ms));

module.exports = {
  config: {
    name: "buzz",
    version: "3.2.0",
    role: 2,
    author: "Akash Edit",
    description: "১০০+ আকাশ ভাই স্টাইল ক্যাপশন পাঠায়",
    category: "fun",
    usages: "@mention",
    cooldowns: 5,
  },

  onStart: async function({ message, event, args, api }) {
    try {
      const mention = Object.keys(event.mentions)[0];
      if (!mention) {
        return message.reply("😅 যার জন্য মেসেজ যাবে তাকে আগে @ম্যানশন করো ভাই!");
      }

      const name = event.mentions[mention];
      const arraytag = [{ id: mention, tag: name }];

      const messages = [
        `I Always think about you ${name} ❤️`,
        `I will Never leave you ${name} 🫶`,
        `Master Tanjiro Always Thinks about you ${name} 💝`,
        `িMy master Tanjiro can do everything for you ${name} 💌`,
        `WE ALL LOVE YOU MY FRIEND ে ${name} 🥰`,
      ];

      message.reply(`😎 শুরু হচ্ছে "আকাশ ভাই স্টাইল স্টকিং" ${name}-এর জন্য...`);

      // প্রতিটি মেসেজ 3 সেকেন্ড পর পর পাঠানো হবে
      for (const msg of messages) {
        await delay(3000);
        message.reply({ body: msg, mentions: arraytag });
      }

      message.reply(`💘 Finished  ${name}-SEND MY LOVE TO YOU IS DREAM 😅`);
    } catch (err) {
      console.error(err);
      message.reply("❌ Theres something happed error 404");
    }
  }
};
