export default (state={}, action) => {
  switch(action.type) {
    case 'LOAD_HOMEPAGE_PARENT':
      return action.dataPayLoad;
    default:
      return state;
  }
};
