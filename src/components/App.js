import React from 'react';
import NavbarComponent from './NavbarComponent'
import Board from './Board'
import '../App.css'
import { Provider } from 'react-redux'
import { ConfigureStore } from '../redux/store';

export default function App(){ 
  return <Provider store={ ConfigureStore() }>
        <div className="App">
          <NavbarComponent />
          <Board />
        </div>
      </Provider>
  }
