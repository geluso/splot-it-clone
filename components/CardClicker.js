import React, {Component, Fragment} from 'react';
import card01 from '../assets/raw-photos/01.jpg';
import deck from './CardList';

class CardClicker extends Component {
  state = {currentCard: 0};

  dec = () => {
    this.setState({currentCard: this.state.currentCard - 1});
  }

  inc = () => {
    this.setState({currentCard: this.state.currentCard + 1});
  }

  card = () => {
    let card = this.state.currentCard;
    if (this.state.currentCard < 10) {
      card = '0' + this.state.currentCard;
    }
    card = 'card' + card;
    let img = deck[card];
    console.log('img', img);
    return img;
  }

  render() {
    return <Fragment>
      <p>
        {this.card()} {' '} {this.state.currentCard}
      </p>
      <div>
        <img src={this.card()} />
      </div>
      <div className="pagination-controls">
        <button onClick={this.dec}>prev</button>
        <button onClick={this.inc}>next</button>
      </div>

    </Fragment>
  }
}

export default CardClicker;
