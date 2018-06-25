const { View, QuickrepliesMessage } = require('botfuel-dialog');

class QuickrepliestestView extends View {
  render() {

    return [new QuickrepliesMessage(['Paris','London'],'Where do you want to go?')];

  }
}

module.exports = QuickrepliestestView;

