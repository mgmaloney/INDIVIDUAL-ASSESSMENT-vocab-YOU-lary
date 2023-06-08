import { filterBtnsCommunity } from '../components/filtersBtns';
import {
  getCommunityWords,
  getUserWords,
} from '../utils/databaseCalls/wordData';

const navigationEvents = (user) => {
  document.getElementById('navigation').addEventListener('click', async (e) => {
    if (e.target.id === 'community-btn-user') {
      await getCommunityWords();
      await filterBtnsCommunity();
    }
    if (e.target.id.includes('home-btn')) {
      await getUserWords(user);
    }
  });
};

export default navigationEvents;
