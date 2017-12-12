import React from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import WizardFormContainer from '../wizard/containers/WizardFormContainer';

const Home = () => (
  <div className="container">
    <GitHubForkRibbon
      href="https://github.com/revsys/private-packages-wizard/"
      target="_blank"
      position="right"
    >
      Fork me on GitHub
    </GitHubForkRibbon>
    <h1>Private Packages Wizard</h1>
    <WizardFormContainer />
  </div>
);


export default Home;
