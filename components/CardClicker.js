import React, {Component, Fragment} from 'react';
import card01 from '../assets/raw-photos/01.jpg';

class CardClicker extends Component {
  currentCard = 0;

  dec = () => {
    this.currentCard--;
  }

  inc = () => {
    console.log(this.currentCard);
    this.currentCard++;
  }

  render() {
    return <Fragment>
      <p>
        {card01} {' '} {this.currentCard}
      </p>
      <div>
        <img src={card01} />
      </div>
      <div className="pagination-controls">
        <button onClick={this.dec}>prev</button>
        <button onClick={this.inc}>next</button>
      </div>

    </Fragment>
  }
}

export default CardClicker;
