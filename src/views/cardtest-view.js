const { View, BotImageMessage } = require('botfuel-dialog');

class CardtestView extends View {
  render() {
    return [new BotImageMessage('https://www.rei.com/media/0df5ec8e-e55e-4e63-8e6e-ee55cc695cbe?size=784x588')];

  }
}

module.exports = CardtestView;