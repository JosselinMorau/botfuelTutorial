const { View, ActionsMessage, Link, Postback  } = require('botfuel-dialog');

class ActiontestView extends View {
  render() {

    const actions = [
      new Link('Botfuel', 'https://www.botfuel.io'),
      new Postback('Hello', 'greetings', []),
    ];

    return [new ActionsMessage(actions)];

  }
}

module.exports = ActiontestView;

