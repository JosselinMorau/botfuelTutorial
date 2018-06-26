const { View, BotTableMessage } = require('botfuel-dialog');

class TabletestView extends View {
  render() {
    const data = {
      schema: [
        {
          name: 'Name',
        },
        {
          city: 'City',
        },
      ],
      rows: [
        {
          name: 'John',
          city: 'New York',
        },
        {
          name: 'Peter',
          city: 'Paris',
        },
      ],
    };
    return [new BotTableMessage(data)];

  }
}

module.exports = TabletestView;