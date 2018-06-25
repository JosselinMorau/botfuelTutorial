const { View, CardsMessage, Card, Link, Postback } = require('botfuel-dialog');

class ActiontestView extends View {
  render() {

    const cards = [
        new Card('Top hat', 'https://www.villagehatshop.com/photos/product/standard/4511390S416258/all/vent-grade-8-panama-straw-outback-hat.jpg', [
          new Postback('Buy', 'products', [{ dim: 'product', values: ['product_1'] }]),
        ]),
        new Card('Cowboy hat', 'https://www.villagehatshop.com/photos/product/standard/4511390S416258/all/vent-grade-8-panama-straw-outback-hat.jpg', [
          new Postback('Buy', 'products', [{ dim: 'product', values: ['product_2'] }]),
        ]),
        new Card('Detective hat', 'https://www.villagehatshop.com/photos/product/standard/4511390S416258/all/vent-grade-8-panama-straw-outback-hat.jpg', [
          new Postback('Buy', 'products', [{ dim: 'product', values: ['product_3'] }]),
        ]);
    ];

    return [new CardsMessage(cards)];

  }
}

module.exports = ActiontestView;