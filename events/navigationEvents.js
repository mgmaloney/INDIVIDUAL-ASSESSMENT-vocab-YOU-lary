import { filterBtnsCommunity } from '../components/filtersBtns';
import navBar from '../components/navbar';
import {
  getCommunityWords,
  getUserWords,
} from '../utils/databaseCalls/wordData';

const navigationEvents = (user) => {
  document.getElementById('navigation').addEventListener('click', async (e) => {
    if (e.target.id === 'community-btn') {
      await getCommunityWords();
      await filterBtnsCommunity();
      navBar(true);
    }
    if (e.target.id.includes('home-btn')) {
      await getUserWords(user);
      navBar(false);
    }
  });
};

export default navigationEvents;
