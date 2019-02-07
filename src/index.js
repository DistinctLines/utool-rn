import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import ExploreContainer from './explore/containers/ExploreContainer';

import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {

 constructor(props) {
  super(props);
 }

 render() {
  return (
    <Provider store={store}>
      <ExploreContainer />
    </Provider>
  );
 }

}