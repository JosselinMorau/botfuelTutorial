const { View, BotTableMessage } = require('botfuel-dialog');

class TabletestView extends View {
  render() {
    return [new BotTableMessage([ { name: 'Name' }, { city: 'City' }],
        [   { name: 'John', city: 'New York' },
            { name: 'Peter', city: 'Paris' }
        ])];

  }
}

module.exports = TabletestView;