import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../actions';

class HomeChildOne extends Component {
  render = () => {
    return (
      <fieldset>
        <legend>Home Page Child One:</legend>
        <div><label>Name : </label><span>{this.props.homePageChildOneData.name}</span></div>
        <div><label>Address : </label><span>{this.props.homePageChildOneData.address}</span></div>
      </fieldset>
    );
  }
  componentDidMount = () => {
    this.props.loadHomePageChildOneData();
  };
}

function mapStateToProps(state) {
  return {
    homePageChildOneData: state.homePageChildOneData
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({loadHomePageChildOneData: actions.loadHomeChildOne}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeChildOne);
