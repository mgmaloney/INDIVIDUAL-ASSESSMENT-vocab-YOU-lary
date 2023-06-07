import {
  userFilterByLanguage,
  publicFilterByLanguage,
} from '../utils/databaseCalls/wordData';

const filterEvents = (user) => {
  document.getElementById('main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('filter-btn-user')) {
      const [language] = e.target.id.split('--');
      userFilterByLanguage(user, language);
    }
    if (e.target.id.includes('filter-btn-community')) {
      const [language] = e.target.id.split('--');
      publicFilterByLanguage(user, language);
    }
  });
};

export default filterEvents;
