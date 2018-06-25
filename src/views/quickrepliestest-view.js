const { View, QuickrepliesMessage } = require('botfuel-dialog');

class QuickrepliestestView extends View {
  render() {

    return [

      new QuickrepliesMessage(['1', '2', '3', '4', '5'], { text: 'Please give me a note.' })
     
     ];

  }
}

module.exports = QuickrepliestestView;

