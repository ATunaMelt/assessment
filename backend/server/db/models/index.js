const User = require('./user');
const Content = require('./content');
const Chat = require('./chat');

// Many Users can be in many chats, we use a through table to keep track
Chat.belongsToMany(User, { through: 'User_Chat' });
User.belongsToMany(Chat, { through: 'User_Chat' });

// The messages sent inside of chats will belong to that chat and we will store
// the sender on the row.
Content.belongsTo(Chat);

module.exports = {
  User,
  Chat,
  Content
};
