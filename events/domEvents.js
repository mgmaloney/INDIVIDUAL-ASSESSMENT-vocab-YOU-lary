import { signOut } from '../utils/auth';
import clearDom from '../utils/clearDom';
import {
  getSingleWord,
  getUserWords,
  getPublicWords,
  createWord,
  updateWord,
  publicFilterByLanguage,
  userFilterByLanguage,
  deleteWord,
} from '../utils/databaseCalls/wordData';

const domEvents = (user) => {
  const signOutEventListener = () => {
    document.getElementById('google-auth').addEventListener('click', () => {
      signOut();
      clearDom();
    });
  };

  const allOtherDomEvents = (e) => {
    document
      .getElementById('main-container')
      .addEventListener('click', async (e) => {
        if (e.target.id.includes('delete-user')) {
          const [, firebaseKey] = e.target.id.split('--');
          await deleteWord(firebaseKey);
          await getUserWords(user);
        }
        if (e.target.id.includes('delete-community')) {
          const [, firebaseKey] = e.target.id.split('--');
          await deleteWord(firebaseKey);
          await getCommunityWords(user);
        }
        if (e.target.id.includes('edit-user')) {
          const [, firebaseKey] = e.target.id.split('--');
        }
      });
  };

  signOutEventListener();
  allOtherDomEvents();
};

export default domEvents;
