import { filterBtnsCommunity } from '../components/filtersBtns';
import { getCommunityWords } from '../utils/databaseCalls/wordData';

const navigationEvents = (e) => {
  document
    .getElementById('main-container')
    .addEventListener('click', async (e) => {
      if (e.target.id === 'community-btn') {
        await showCommunityWord(await getCommunityWords());
        await filterBtnsCommunity();
      }
    });
};

export default navigationEvents;
