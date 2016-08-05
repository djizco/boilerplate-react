import React, { PropTypes } from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router';
import DevTools from './DevTools.js';
import routes from '../routes';

function Root(props) {
  return (
    <Provider store={props.store}>
      <div className="full-size">
        <Router history={props.history} routes={routes} />
        <DevTools />
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
