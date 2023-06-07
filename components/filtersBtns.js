import { getLanguages } from '../utils/databaseCalls/wordData';
import renderToDom from '../utils/renderToDom';

const filterBtns = async (user) => {
  let languages = await getLanguages(user);
  let domString = '';
  languages.forEach((language) => {
    domString += `
    <div class="language-filter-div id="${language}-filter">
      <button class="language-filter-btn" id="${language}-filter-btn">${language}</button>
    </div>
    `;
  });
  renderToDom('filter-language-btns', domString);
};

export default filterBtns;
