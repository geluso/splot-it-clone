import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CardClicker from './components/CardClicker';

class App extends Component {
  render() {
    return <CardClicker />
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);
