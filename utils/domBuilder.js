import { render } from 'sass';
import renderToDom from './renderToDom';

const domBuilder = async (community) => {
  const domString = `
  <h1 id="page-title">PRO-CAB</h1>
  <div id="nav-login">
    <div id="navigation"></div>
    <div id="search-login">
      <div id="searchbox"></div>
      <div id="login-form-container"></div>
    </div>
  </div>
  <div id="main-container">
    <div id="sort-filter">
      <div id="sort-div"></div>
      <div id="filter-language-btns"></div>
    </div>
    <div id="sort"></div>
    <div id="words"></div>
    <div id="add-word"></div>
    <div id="form-container"></div>
  </div>
  `;
  renderToDom('app', domString);
};

export default domBuilder;
