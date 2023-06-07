import { render } from 'sass';
import renderToDom from './renderToDom';

const domBuilder = async (community) => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="filter-language-btns"></div>
    <div id="sort"></div>
    <div id="searchbar"></div>
    <div id="words"></div>
    <div id="add-word"></div>
    <div id="form-container"></div>
  </div>
  `;
  renderToDom('app', domString);
};

export default domBuilder;
