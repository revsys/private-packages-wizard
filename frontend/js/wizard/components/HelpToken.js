import React from 'react';
import PropTypes from 'prop-types';

import HelpTokenDefault from './HelpTokenDefault';
import HelpTokenGitlab from './HelpTokenGitlab';


const HelpToken = ({ tokenURL, provider }) => {
  if (tokenURL === null) {
    return null;
  }

  let HelpText = HelpTokenDefault;
  if (provider === 'GITLAB' || provider === 'GITHOST') {
    // noinspection JSUnusedAssignment
    HelpText = HelpTokenGitlab;
  }

  return (
    <div>
      <HelpText tokenURL={tokenURL} />
    </div>
  );
};


HelpToken.propTypes = {
  tokenURL: PropTypes.string,
  provider: PropTypes.string,
};

HelpToken.defaultProps = {
  tokenURL: null,
  provider: null,
};

export default HelpToken;
