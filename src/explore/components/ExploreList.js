import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

class ExploreList extends Component {

 constructor(props){
  super(props);

  this.state = {};

 }

 componentDidMount() {
  this.props.fetchRandomItems();
 }

 componentWillMount() {

 }

 render(){

  console.log('ITEMS');
  console.log(this.props.items);

  return(
   <View>
    <FlatList
     data={this.props.items} 
     renderItem={(data) => <View><Text>{data.title}</Text></View>}/>
   </View>
  );
 }
}

export default ExploreList;