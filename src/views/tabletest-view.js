const { View, BotTableMessage } = require('botfuel-dialog');

class TabletestView extends View {
  render() {
    const data = {
      schema: [ {key: "name", label: "Name"}, {key: "city", label: "City"}],
      rows: [
        {name: "John", city: "New York"},
        {name: "Peter", city: "Paris"}
      ]
    };
    return [new BotTableMessage(data)];

  }
}

module.exports = TabletestView;