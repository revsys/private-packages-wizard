import React from 'react';
import PropTypes from 'prop-types';


const HelpTokenGitlab = ({ tokenURL }) => (
  <p>
    You can get a token at <a href={tokenURL} rel="nofollow" target="_blank">{ tokenURL }</a>,
    under ‘Deploy Keys’. Note that will have to use the token’s username, not your user’s.
  </p>
);


HelpTokenGitlab.propTypes = {
  tokenURL: PropTypes.string.isRequired,
};

export default HelpTokenGitlab;
