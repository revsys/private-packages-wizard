import {
  SET_INSTALLER,
  SET_USERNAME,
  SET_TOKEN,
  SET_PROVIDER,
  SET_REPO,
  SET_TOKEN_URL,
  SET_ORG,
  SET_TEAMPROJECT,
  SET_REF,
  SET_PROJECT,
  SET_LIBRARY,
  SET_REQ_URL,
} from './actions';

const initialState = {
  installer: 'pip',
  repoUrl: null,
  username: null,
  token: null,
  provider: null,
  tokenUrl: null,
  org: null,
  teamProject: null,
  project: null,
  reference: null,
  isLibrary: false,
  reqUrl: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INSTALLER:
      return {
        ...state,
        installer: action.payload.target.value,
      };
    case SET_PROVIDER:
      return {
        ...state,
        provider: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.target.value || null,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload.target.value,
      };
    case SET_TOKEN_URL:
      return {
        ...state,
        tokenUrl: action.payload,
      };
    case SET_REPO:
      return {
        ...state,
        repo: action.payload,
      };
    case SET_ORG:
      return {
        ...state,
        org: action.payload,
      };
    case SET_TEAMPROJECT:
      return {
        ...state,
        teamProject: action.payload,
      };
    case SET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    case SET_REF:
      return {
        ...state,
        reference: action.payload.target.value,
      };
    case SET_LIBRARY:
      return {
        ...state,
        isLibrary: action.payload.target.checked,
      };
    case SET_REQ_URL:
      return {
        ...state,
        reqUrl: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
