import renderToDom from '../utils/renderToDom';
import { addWordModalCommunity, addWordModalUser } from './addWordModal';

const navBar = (community) => {
  let domString = `
  <nav class="navbar>
    <div id="main-nav">
      <ul class="nav-list">
        <li class="nav-item"><button id="home-btn" class="nav-button">Vocab-YOU-Lary</button></li>
        <li class="nav-item"><button id="community-btn" class="nav-button">Community</button></li>
        <li class="nav-item"><div id="word-modal-user"></div><div id="word-modal-community"></div>
      </ul>
    </div>
  </nav>
  `;
  renderToDom('navigation', domString);
};

export default navBar;
