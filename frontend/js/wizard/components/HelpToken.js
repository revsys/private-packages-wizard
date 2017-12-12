import React from 'react';
import PropTypes from 'prop-types';


const HelpToken = ({ tokenURL }) => {
  if (tokenURL === null) {
    return null;
  }

  return (
    <div>
      <p>You can get a token at <a href={tokenURL} rel="nofollow" target="_blank">{ tokenURL }</a>.</p>
      <p>* indicates required fields.</p>
      <p>You may leave the Access Token empty if you are super concerned about security and it will be filled with XXXs which you can manually replace.  Any token entered is not transmitted anywhere, but we understand  and congratulate your paranoia.</p>
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
