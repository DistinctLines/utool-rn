import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRandomItems } from '../actions/index';
import ExploreList from '../components/ExploreList';

class ExploreContainer extends Component {

 constructor(props){
  super(props);
 }

 render(){
  return(
   <ExploreList {...this.props} />
  );
 }

}

const stateToProps = state => {
 return {
  items: state.explore.items
 }
}

const dispatchToProps = dispatch => {
 return {
  fetchRandomItems: () => { return dispatch(fetchRandomItems()); }
 }
}


export default connect(stateToProps, dispatchToProps)(ExploreContainer);