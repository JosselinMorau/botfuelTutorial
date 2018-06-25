const { PromptView, QuickrepliesMessage } = require('botfuel-dialog');

class QuickRepliesTestView extends PromptView {
  render() {

    return [new QuickrepliesMessage(['Paris','London'],'Where do you want to go?')];

  }
}

module.exports = QuickRepliesTestView;

