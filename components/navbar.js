import { render } from 'sass';
import renderToDom from '../utils/renderToDom';
import logoutButton from './logoutButton';

const navBar = (community) => {
  let domString = `
  <nav class="navbar>
    <div id="main-nav">
      <ul class="nav-list">
        <li class="nav-item"><button id=${
          community ? 'home-btn-community' : 'home-btn'
        } class="nav-button">Vocab-YOU-Lary</button></li>
        <li class="nav-item"><button id=${
          community ? 'add-word-btn-community' : 'add-word-btn'
        } class="nav-button">Create Entry</button></li>
        <li class="nav-item"><button id=${
          community ? 'community-btn' : 'community-btn-user'
        } class="nav-button">Community</button></li>
      </ul>
    </div>
    <div id="search-logout">
      <input id="searchbox" type="text"></input>
      <button id="google-auth" class="btn btn-danger">SIGNOUT</button>
    </div>
  </nav>
  `;
  renderToDom('navigation', domString);
};

export default navBar;
