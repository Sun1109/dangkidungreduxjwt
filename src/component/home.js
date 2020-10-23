import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../actions/action';
class Home extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome</h1>
      </div>
    )
  }
}

export default Home;