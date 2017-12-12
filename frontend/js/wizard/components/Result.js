import React from 'react';
import PropTypes from 'prop-types';

import PipResult from './PipResult';
import PipenvResult from './PipenvResult';
import LibraryResult from './LibraryResult';

const Result = (props) => {
  if (props.reqUrl === null) {
    return null;
  }

  return (
    <div className="well">
      <hr />
      <h3>How to add your package</h3>
      <PipResult {...props} />
      <PipenvResult {...props} />
      <LibraryResult {...props} />
    </div>
  );
};

Result.propTypes = {
  reqUrl: PropTypes.string,
  installer: PropTypes.string,
  project: PropTypes.string,
  ref: PropTypes.string,
  isLibrary: PropTypes.bool,
};

Result.defaultProps = {
  reqUrl: null,
  installer: null,
  project: null,
  ref: null,
  isLibrary: null,
};

export default Result;
