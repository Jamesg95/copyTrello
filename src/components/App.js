import React, { Component }from 'react';
import NavbarComponent from './NavbarComponent'
import Board from './Board'
import '../App.css'
import { Provider } from 'react-redux'
import { ConfigureStore } from '../redux/store';


const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavbarComponent />
          <Board />
        </div>
      </Provider>
      );
  }
}


export default App;
