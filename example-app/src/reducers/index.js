import { combineReducers } from 'redux';
import NavigationReducer from './rd-navigation';
import HomePageParentReducer from './rd-homepage-parent';
import HomePageChildOneReducer from './rd-homepage-child-one';
import HomePageChildTwoReducer from './rd-homepage-child-two';

const allReducers = combineReducers({
  navigationData: NavigationReducer,
  homePageParentData: HomePageParentReducer,
  homePageChildOneData: HomePageChildOneReducer,
  homePageChildTwoData: HomePageChildTwoReducer
});

export default allReducers;
