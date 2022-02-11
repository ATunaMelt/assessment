const User = require('./user');
const Content = require('./content');
const Chat = require('./chat');
// const Members = require('./members');

// 1 to many
// Many Users -> Many Chats
// 1 Mesage -> Chat

Chat.belongsToMany(User, { through: 'User_Chat' });
User.belongsToMany(Chat, { through: 'User_Chat' });

// User.hasMany(Chat);
// Chat.belongsTo(User);

// Members.hasMany(Chat);
// Chat.belongsTo(Members);

// User.hasMany(Content);
// Content.belongsTo(User);

Content.belongsTo(Chat);

// Members.hasOne(Chat);

// Content.belongsTo(Chat);
// Chat.hasMany(Content);

// These will print all magic methods for a model!
const chatModel = Chat;
console.log('\nChat model can use:\n\n');
for (let assoc of Object.keys(chatModel.associations)) {
  for (let accessor of Object.keys(chatModel.associations[assoc].accessors)) {
    console.log(
      chatModel.name +
        '.' +
        chatModel.associations[assoc].accessors[accessor] +
        '()'
    );
  }
}
// These will print all magic methods for a model!
const userModel = User;
console.log('\n\n User model can use:\n\n');
for (let assoc of Object.keys(userModel.associations)) {
  for (let accessor of Object.keys(userModel.associations[assoc].accessors)) {
    console.log(
      userModel.name +
        '.' +
        userModel.associations[assoc].accessors[accessor] +
        '()'
    );
  }
}

// These will print all magic methods for a model!
const contentModel = Content;
console.log('\n\ncontent model can use:\n\n');
for (let assoc of Object.keys(contentModel.associations)) {
  for (let accessor of Object.keys(
    contentModel.associations[assoc].accessors
  )) {
    console.log(
      contentModel.name +
        '.' +
        contentModel.associations[assoc].accessors[accessor] +
        '()'
    );
  }
}
// These will print all magic methods for a model!
// const membersModel = Members;
// console.log('\n\nmembers model can use:\n\n');
// for (let assoc of Object.keys(membersModel.associations)) {
//   for (let accessor of Object.keys(
//     membersModel.associations[assoc].accessors
//   )) {
//     console.log(
//       membersModel.name +
//         '.' +
//         membersModel.associations[assoc].accessors[accessor] +
//         '()'
//     );
//   }
// }

module.exports = {
  User,
  Chat,
  // Content,
  // Members,
};
