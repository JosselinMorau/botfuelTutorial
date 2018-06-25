const { View, BotTextMessage } = require('botfuel-dialog');

class GreetingsView extends View {
  render() {
    return [
      new BotTextMessage('Hello user.'),
    ];
  }
}

module.exports = GreetingsView;
