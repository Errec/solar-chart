import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Chart from './components/Chart'
import "./styles/App.sass";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Chart></Chart>
        </div> 
      </Provider>
    );
  }
}

export default App;
