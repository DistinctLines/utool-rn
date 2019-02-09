import React, { Component } from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  ListView, 
  ListItem 
} from 'react-native';

import { ExploreListItem } from './ExploreListItem'

class ExploreList extends Component {

 constructor(props){
  super(props);

  this.state = {
    items: []
  };

 }

  componentDidMount() {
    this.props.fetchRandomItems();
  }

  componentWillMount() {
  }

 render(){

  console.log('ITEMS');
  console.log(this.props.items);

  var i1 = this.props.items[0];

  return(
    // <Text>Hello world</Text>
    <FlatList
      style={styles.flatList}
      data={this.props.items}
      renderItem={({item}) => (
        <ExploreListItem data={item} />
      )}
      keyExtractor={(item, index) => index.toString()} />
  );
 }
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default ExploreList;