import {
  addWordModalCommunity,
  addWordModalUser,
} from '../components/addWordModal';
import { filterBtnsCommunity, filterBtnsUser } from '../components/filtersBtns';
import navBar from '../components/navbar';
import {
  getCommunityWords,
  getUserWords,
} from '../utils/databaseCalls/wordData';

const navigationEvents = (user) => {
  document.getElementById('navigation').addEventListener('click', async (e) => {
    if (e.target.id === 'community-btn') {
      await getCommunityWords();
      navBar(true);
      addWordModalCommunity();
      await filterBtnsCommunity();
    }
    if (e.target.id.includes('home-btn')) {
      await getUserWords(user);
      navBar(false);
      addWordModalUser();
      await filterBtnsUser();
    }
    // if(e.target.id === '')
  });
};

export default navigationEvents;
