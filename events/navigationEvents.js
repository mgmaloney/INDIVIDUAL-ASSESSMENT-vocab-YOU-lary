import {
  addWordModalCommunity,
  addWordModalUser,
} from '../components/addWordModal';
import { filterBtnsCommunity, filterBtnsUser } from '../components/filtersBtns';
import navBar from '../components/navbar';
import { searchBoxCommunity, searchBoxUser } from '../components/searchBox';
import {
  sortDropDownCommunity,
  sortDropDownUser,
} from '../components/sortComponent';
import {
  getCommunityWords,
  getUserWords,
} from '../utils/databaseCalls/wordData';
import { searchEvents } from './searchEvents';
import sortEvents from './sortEvents';

const navigationEvents = async (user) => {
  document.getElementById('navigation').addEventListener('click', async (e) => {
    if (e.target.id === 'community-btn') {
      await getCommunityWords();
      sortDropDownCommunity();
      sortEvents(user);
      searchBoxCommunity();
      searchEvents(user);
      navBar(true);
      addWordModalCommunity();
      await filterBtnsCommunity();
    }
    if (e.target.id.includes('home-btn')) {
      await getUserWords(user);
      sortDropDownUser();
      sortEvents(user);
      searchBoxUser();
      searchEvents(user);
      navBar(false);
      addWordModalUser();
      await filterBtnsUser();
    }
  });
};

export default navigationEvents;
