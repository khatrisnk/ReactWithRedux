import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../actions';

class HomeChildTwo extends Component {
  render = () => {
    return (
      <fieldset>
        <legend>Home Page Child Two:</legend>
        <div><label>Name : </label><span>{this.props.homePageChildTwoData.name}</span></div>
        <div><label>Address : </label><span>{this.props.homePageChildTwoData.address}</span></div>
      </fieldset>
    );
  }
  componentDidMount = () => {
    this.props.loadHomePageChildTwoData();
  };
}

function mapStateToProps(state) {
  return {
    homePageChildTwoData: state.homePageChildTwoData
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({loadHomePageChildTwoData: actions.loadHomeChildTwo}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeChildTwo);
