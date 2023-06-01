import { render } from 'sass';
import renderToDom from '../utils/renderToDom';

const navBar = () => {
  let domString = `
  <nav class="navbar>
    <div id="main-nav">
      <ul class="nav-list">
        <li class="nav-item" id="logo">Vocab-YOU-Lary</li>
        <li class="nav-item">Create Entry</li>
        <li class="nav-item">Create Language</li>
        <li class="nav-item">Community</li>
      </ul>
    </div>
    <div id="search-logout"></div>
  </nav>
  `;
  renderToDom('navigation', domString);
};

export default navBar;
