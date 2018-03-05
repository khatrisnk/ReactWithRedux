export const loadNavigation = () => {
  return {
    type: 'LOAD_NAVIGATION',
    dataPayLoad: [
      {
        menu: 'Home',
        submenu: ['List1', 'List2', 'List3']
      },
      {
        menu: 'NavLink1'
      },
      {
        menu: 'NavLink2',
        submenu: ['List1', 'List2', 'List3']
      },
      {
        menu: 'NavLink3'
      },
      {
        menu: 'NavLink4'
      }
    ]
  }
};
