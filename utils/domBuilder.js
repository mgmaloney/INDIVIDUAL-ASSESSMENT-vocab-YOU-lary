import { render } from 'sass';
import renderToDom from './renderToDom';

const domBuilder = async () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="language-filters"></div>
    <div id="sort"></div>
    <div id="filter-language-dropdown"></div>
    <div id="searchbar"></div>
    <div id="words"></div>
    <div id="add-word"></div>
    <div id="form-container"></div>
  </div>
  `;
  renderToDom('app', domString);
};

export default domBuilder;
