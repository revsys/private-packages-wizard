import React from 'react';
import PropTypes from 'prop-types';


const HelpToken = ({ tokenURL }) => {
  if (tokenURL === null) {
    return null;
  }

  return (
    <div>
      <p>You can get a token at <a href={tokenURL} rel="nofollow" target="_blank">{ tokenURL }</a>.</p>
    </div>
  );
};


HelpToken.propTypes = {
  tokenURL: PropTypes.string,
};

HelpToken.defaultProps = {
  tokenURL: null,
};

export default HelpToken;
