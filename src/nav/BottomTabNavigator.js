import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import ExploreContainer from '../explore/containers/ExploreContainer';

const BottomTabNavigator = createBottomTabNavigator(
 {
  Explore: ExploreContainer,
  Messaging: ExploreContainer,
  Profile: ExploreContainer
 },
 {
 }
);

const AppContainer = createAppContainer(BottomTabNavigator);

export default AppContainer;
