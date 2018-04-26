import { createAction } from 'redux-actions';

export const SET_INSTALLER = 'SET_INSTALLER';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_REPO = 'SET_REPO';
export const SET_PROVIDER = 'SET_PROVIDER';
export const SET_TOKEN_URL = 'SET_TOKEN_URL';
export const SET_ORG = 'SET_ORG';
export const SET_TEAMPROJECT = 'SET_TEAMPROJECT';
export const SET_TEAM = 'SET_TEAM';
export const SET_PROJECT = 'SET_PROJECT';
export const SET_REF = 'SET_REF';
export const SET_VERSION = 'SET_VERSION';
export const SET_LIBRARY = 'SET_LIBRARY';
export const SET_REQ_URL = 'SET_REQ_URL';

export const setInstaller = createAction(SET_INSTALLER);
export const setUsername = createAction(SET_USERNAME);
export const setToken = createAction(SET_TOKEN);
export const setProvider = createAction(SET_PROVIDER);
export const setRepo = createAction(SET_REPO);
export const setTokenUrl = createAction(SET_TOKEN_URL);
export const setOrg = createAction(SET_ORG);
export const setTeamProject = createAction(SET_TEAMPROJECT);
export const setTeam = createAction(SET_TEAM);
export const setProject = createAction(SET_PROJECT);
export const setRef = createAction(SET_REF);
export const setVersion = createAction(SET_VERSION);
export const setLibrary = createAction(SET_LIBRARY);
export const setReqUrl = createAction(SET_REQ_URL);


export const computeRef = (e, change) => (
  (dispatch, getState) => {
    const state = getState();
    const ref = e.target.value;

    dispatch(setRef(ref));

    if (state.wizard.version === null) {
      const version = ref.match(/[\d.]+/);
      if (version !== null) {
        change('version', version.toString());
      }
    }
  }
);

export const computeTokenUrl = provider => (
  (dispatch) => {
    let tokenUrl;

    switch (provider) {
      case 'GITHUB':
        tokenUrl = 'https://github.com/settings/tokens';
        break;
      case 'GITLAB':
        tokenUrl = 'https://gitlab.com/profile/personal_access_tokens';
        break;
      default:
        tokenUrl = null;
    }
    dispatch(setTokenUrl(tokenUrl));
  }
);

export const parseRepo = e => (
  (dispatch) => {
    let repo = e.target.value;
    repo = repo.replace(/\/$/, '');

    let provider = null;
    let org = null;
    let teamProject = null;
    let team = null;
    let project = null;
    let remainder = null;
    let rest = null;

    try {
      const parser = new URL(repo);
      const { hostname, pathname } = parser;

      if (hostname === 'github.com') {
        provider = 'GITHUB';
      } else if (hostname === 'gitlab.com') {
        provider = 'GITLAB';
      } else if (hostname === 'bitbucket.org') {
        provider = 'BITBUCKET';
      } else if (hostname.match(/\w+\.githost\.io/)) {
        provider = 'GITHOST';
      }

      teamProject = pathname.slice(1);

      [remainder, team, project] = pathname.split('/');

      if (provider === 'GITHOST') {
        [org, ...rest] = hostname.split('.'); // eslint-disable-line no-undef
      }
    } catch (e) {
      return;
    }

    dispatch(setProvider(provider));
    dispatch(setOrg(org));
    dispatch(setTeamProject(teamProject));
    dispatch(setProject(project));
    dispatch(computeTokenUrl(provider));
  }
);

export const computeUrl = () => (
  (dispatch, getState) => {
    const wizardState = getState().wizard;
    const {
      installer, provider, org, teamProject, reference, username, token,
    } = wizardState;

    let url = null;
    if (reference !== null) {
      const sanitToken = token === null ? 'XXXXXX' : token;
      const scheme = installer === 'pipenv' ? 'git+https://' : 'https://';
      if (installer === 'pip') {
        switch (provider) {
          case 'GITHUB':
            url = `${scheme}${sanitToken}@github.com/${teamProject}/archive/${reference}.zip`;
            break;
          case 'GITLAB':
            url = `${scheme}gitlab.com/api/v4/projects/${encodeURIComponent(teamProject)}/repository/archive?sha=${reference}&private_token=${sanitToken}`;
            break;
          case 'GITHOST':
            url = `${scheme}${org}.githost.io/api/v4/projects/${encodeURIComponent(teamProject)}/repository/archive?sha=${reference}&private_token=${sanitToken}`;
            break;
          case 'BITBUCKET':
            url = `${scheme}${username}:${sanitToken}@bitbucket.org${teamProject}/get/${reference}.zip`;
            break;
          default:
            url = null;
        }
      } else if (installer === 'pipenv') {
        switch (provider) {
          case 'GITHUB':
            url = `${scheme}${sanitToken}@github.com${teamProject}.git@${reference}`;
            break;
          case 'GITLAB':
            url = `${scheme}${username}:${sanitToken}@gitlab.com${teamProject}.git@${reference}`;
            break;
          case 'GITHOST':
            url = `${scheme}${username}:${sanitToken}@${org}.githost.io${teamProject}.git@${reference}`;
            break;
          case 'BITBUCKET':
            url = `${scheme}${username}:${sanitToken}@bitbucket.org${teamProject}.git@${reference}`;
            break;
          default:
            url = null;
        }
      }
    }

    dispatch(setReqUrl(url));
  }
);
