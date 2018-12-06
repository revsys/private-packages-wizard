import React from 'react';
import PropTypes from 'prop-types';


const HelpTokenDefault = ({ tokenURL }) => (
  <p>You can get a token at <a href={tokenURL} rel="nofollow" target="_blank">{ tokenURL }</a>.</p>
);


HelpTokenDefault.propTypes = {
  tokenURL: PropTypes.string.isRequired,
};

export default HelpTokenDefault;
