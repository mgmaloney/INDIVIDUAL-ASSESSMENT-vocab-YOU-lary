import jQuery from 'jquery';
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
import { addWordModalUser } from '../components/addWordModal';
import 'jquery';

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
          addWordModalUser(await getSingleWord(firebaseKey));
          $('#add-word-modal-user').modal('show');
          console.log('clcik worked');
        }
        if (e.target.id.includes('edit-community')) {
          const [, firebaseKey] = e.target.id.split('--');
          addWordModalCommunity(await getSingleWord(firebaseKey));
          $('#add-word-modal-community').modal('show');
          console.log('clcik worked');
        }
      });
  };

  signOutEventListener();
  allOtherDomEvents();
};

export default domEvents;
