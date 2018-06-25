const { View, BotTableMessage } = require('botfuel-dialog');

class TabletestView extends View {
  render() {
    const data = {
      schema: [
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'job',
          label: 'Job title',
        },
      ],
      rows: [
        {
          name: 'John Doe',
          job: 'Plumber',
        },
        {
          name: 'Jane Doe',
          job: 'Designer',
        },
      ],
    };
    return [new BotTableMessage(data)];

  }
}

module.exports = TabletestView;