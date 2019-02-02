import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// export class App extends Component {

//  constructor(props) {
//   super(props);
//  }

//  render() {
//   return (
//    <View>
//     <Text>Hello my name is taylo!!r</Text>
//    </View>
//   );
//  }

// }

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Details')}
      />
     </View>
   );
 }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}


const AppNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  Profile: ProfileScreen 
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);