import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import { actions } from '../actions';
import { components } from '../components';

class Navigation extends Component {

  render = () => {
    if(this.props.navigationData.length === undefined){
      return (<div>Loading ...</div>);
    }else{
      const navList = this.props.navigationData.map( currentItem => {
        return (
          <li key={currentItem.menu}>
            <Link to={`/${currentItem.menu === 'Home' ? '' : currentItem.menu}`} className="nav-link">{currentItem.menu}</Link>
            {
              currentItem.submenu &&
              <ul className="sub-menu">
                {
                  currentItem.submenu.map(item => {
                    return (
                      <li key={item}>
                        <Link to={`/${currentItem.menu}/${item}`} className="sub-nav-link">{item}</Link>
                      </li>
                    );
                  })
                }
              </ul>
            }
          </li>
        );
      });
      return (
        <Router basename="example">
          <div>
            <ul className='nav-menu'>
                {navList}
            </ul>
            <Switch>
                <Route exact path="/" component={components.Home} />
                <Route path="/Home/List1" render={() => (<h1>Home List1</h1>)} />
                <Route path="/Home/List2" render={() => (<h1>Home List2</h1>)} />
                <Route path="/Home/List3" render={() => (<h1>Home List3</h1>)} />

                <Route path="/NavLink1" render={() => (<h1>NavLink1</h1>)} />

                <Route exact path="/NavLink2" render={() => (<h1>NavLink2</h1>)} />
                <Route path="/NavLink2/List1" render={() => (<h1>NavLink2 List1</h1>)} />
                <Route path="/NavLink2/List2" render={() => (<h1>NavLink2 List2</h1>)} />
                <Route path="/NavLink2/List3" render={() => (<h1>NavLink2 List3</h1>)} />

                <Route path="/NavLink3" render={() => (<h1>NavLink3</h1>)} />
                <Route path="/NavLink4" render={() => (<h1>NavLink4</h1>)} />

                <Route render={() => (<h1>Page Not Found !!!</h1>)} />
            </Switch>
          </div>
        </Router>
      );
    }
  };

  componentDidMount = () => {
    this.props.loadNavigationData();
  };
}

function mapStateToProps(state) {
  return {
    navigationData: state.navigationData
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({loadNavigationData: actions.loadNavigation}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Navigation);
