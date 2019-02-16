import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import ExploreContainer from './explore/containers/ExploreContainer';
import AppContainer from './nav/BottomTabNavigator';

import { Button, Text, View } from 'react-native';

export default class App extends Component {

 constructor(props) {
  super(props);
 }

 render() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
 }

}