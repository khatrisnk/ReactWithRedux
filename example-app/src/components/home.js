import React, { Component } from 'react';

import { containers } from '../containers';

export class Home extends Component {
  render = (props) => {
    return (
      <div className="homepage">
        <containers.HomeParent></containers.HomeParent>
      </div>
    );
  }
}
