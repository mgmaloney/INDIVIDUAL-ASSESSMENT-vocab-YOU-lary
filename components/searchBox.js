import renderToDom from '../utils/renderToDom';

const searchBoxUser = () => {
  let domString = `
  <input id="searchbox-input-user" type="text"></input>
  <button id="search-btn-user">Search</button>
  `;
  renderToDom('searchbox', domString);
};

const searchBoxCommunity = () => {
  let domString = `
  <input id="searchbox-input-community" type="text"></input>
  <button id="search-btn-community">Search</button>
  `;
  renderToDom('searchbox', domString);
};

export { searchBoxUser, searchBoxCommunity };
