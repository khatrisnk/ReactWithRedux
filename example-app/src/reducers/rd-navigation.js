export default (state={}, action) => {
  switch(action.type) {
    case 'LOAD_NAVIGATION':
      return action.dataPayLoad;
    default:
      return state;
  }
};

