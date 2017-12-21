import React from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import WizardFormContainer from '../wizard/containers/WizardFormContainer';

let divStyle = {
  border: '1px solid black',
  padding: '30px',
  background: '#eee',
  marginBottom: '25px',
  marginTop: '25px',
}

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
    <div style={divStyle}>
    <p>
    Use this handy wizard to generate pip or pipenv formatted dependency links
    for adding private packages into your requirements.txt or Pipfiles of your projects.
    </p>
    <p>
    Just pick your installer, enter a vcs ref such as a branch or tag and
    cut-n-paste your repository URL and we'll generate the correct URL for you.
    </p>
    <p>You may leave the Access Token empty if you are super concerned about security and it will be filled with XXXs which you can manually replace.  Any token entered is not transmitted anywhere, but we understand  and congratulate your paranoia.</p>
    <p>* indicates required fields</p>
    </div>
    <WizardFormContainer />
  </div>
);


export default Home;
