import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginComponent from './components/LoginComponent';
import TodoComponent from './components/TodoComponent'

export default class App extends Component {
  render() {
    return (
      <LoginComponent />
    );
  }
}

