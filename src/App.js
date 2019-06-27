import React, { Component } from 'react';
import './App.css';
import SideDrawer from './components/SideDrawer';
import axios from 'axios';

class App extends Component {
  state = {
    customers: []
  };
  componentDidMount() {
    axios
      .get('https://api.myjson.com/bins/emxxb')
      .then(response => {
        console.log(response.data);
        this.setState({
          customers: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <SideDrawer />
      </div>
    );
  }
}

export default App;
