import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../actions';
import { containers } from './index';

class HomeParent extends Component {
  render = () => {
    return (
      <div className="home-page-parent">
        <fieldset>
          <legend>Home Page Parent:</legend>
          <div><label>Name : </label><span>{this.props.homePageParentData.name}</span></div>
          <div><label>Address : </label><span>{this.props.homePageParentData.address}</span></div>
          <br/>
          <br/>
          <containers.HomeChildOne />
          <br/>
          <br/>
          <containers.HomeChildTwo />
        </fieldset>
      </div>
    );
  }
  componentDidMount = () => {
    this.props.loadHomePageParentData();
  };
}

function mapStateToProps(state) {
  return {
    homePageParentData: state.homePageParentData
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({loadHomePageParentData: actions.loadHomeParent}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeParent);
