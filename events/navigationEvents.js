import { getCommunityWords } from '../utils/databaseCalls/wordData';

const navigationEvents = (e) => {
  document
    .getElementById('main-container')
    .addEventListener('click', async (e) => {
      if (e.target.id === 'community-btn') {
        getCommunityWords();
      }
    });
};

export default navigationEvents;
