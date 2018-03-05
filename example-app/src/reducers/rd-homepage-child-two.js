export default (state={}, action) => {
  switch(action.type) {
    case 'LOAD_HOMEPAGE_CHILD_TWO':
      return action.dataPayLoad;
    default:
      return state;
  }
};
