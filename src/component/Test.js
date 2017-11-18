import React, { Component } from 'react';
import { Button , List} from 'antd-mobile';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../actions/userActions'
import logo from '../logo.svg';
import '../App.css';
const Item = List.Item;

@connect(
    state => (
        {list: state.users.list || []}),
    dispatch => (
        {userActions: bindActionCreators(userActions, dispatch)})
)
export default class Test extends Component {
    constructor() {
        super()
    }
  render() {
        console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Test!</h1>
        </header>
      </div>
    );
  }
}