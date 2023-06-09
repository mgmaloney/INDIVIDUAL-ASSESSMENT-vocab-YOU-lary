import jQuery from 'jquery';
import { signOut } from '../utils/auth';
import clearDom from '../utils/clearDom';
import {
  getSingleWord,
  getUserWords,
  getCommunityWords,
  createWord,
  updateWord,
  publicFilterByLanguage,
  userFilterByLanguage,
  deleteWord,
} from '../utils/databaseCalls/wordData';
import {
  addWordModalCommunity,
  addWordModalUser,
} from '../components/addWordModal';
import 'jquery';
import { log } from 'util';
import formEvents from './formEvents';

const domEvents = (user) => {
  const signOutEventListener = () => {
    document.getElementById('google-auth').addEventListener('click', () => {
      console.log('click working?');
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
          const wordToEdit = await getSingleWord(firebaseKey);
          console.log(wordToEdit);
          addWordModalUser(wordToEdit);
          $('#add-word-modal-user').modal('show');
        }
        if (e.target.id.includes('edit-community')) {
          const [, firebaseKey] = e.target.id.split('--');
          addWordModalCommunity(await getSingleWord(firebaseKey));
          $('#add-word-modal-community').modal('show');
        }
        if (e.target.id.includes('add-entry-btn')) {
          const [, firebaseKey] = e.target.id.split('--');
          let word = await getSingleWord(firebaseKey);
          console.log('word', word);
          word.copied = true;
          word.firebaseKey = '';
          word.uid = user.uid;
          console.log('word-copied', word);
          await createWord(word);
          alert('Added to your entries!');
        }
      });
  };

  signOutEventListener();
  allOtherDomEvents();
};

export default domEvents;
