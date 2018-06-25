const { View, QuickrepliesMessage } = require('botfuel-dialog');

class QuickRepliesTestView extends View {
  render() {

    return [new QuickrepliesMessage(['Paris','London'],'Where do you want to go?')];

  }
}

module.exports = QuickRepliesTestView;

