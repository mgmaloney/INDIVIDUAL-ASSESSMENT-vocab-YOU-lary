import { showUserWords, showCommunityWords } from '../pages/words';
import {
  getSingleWord,
  getUserWords,
  getPublicWords,
  createWord,
  updateWord,
  publicFilterByLanguage,
  userFilterByLanguage,
  deleteWord,
  getCommunityWords,
} from '../utils/databaseCalls/wordData';

const formEvents = async (user) => {
  document.getElementById('app').addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.id === 'submit-new-word') {
      if (
        document.getElementById('new-word').value === '' ||
        document.getElementById('new-word-description').value === '' ||
        document.getElementById('language-dropdown').value === ''
      ) {
        alert('Please fill out each field');
      } else {
        const payload = {
          word: document.getElementById('new-word').value,
          description: document.getElementById('new-word-description').value,
          private: document.getElementById('private').checked,
          language: document.getElementById('language-dropdown').value,
          timestamp: `${Date.now()}`,
          uid: `${user.uid}`,
        };
        await createWord(payload);
        await getUserWords(user);
        alert('Word Submitted!');
        document.getElementById('close-modal-btn').click();
      }
    }
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      if (
        document.getElementById('new-word').value === '' ||
        document.getElementById('new-word-description').value === '' ||
        document.getElementById('language-dropdown').value === ''
      ) {
        alert('Please fill out each field');
      } else {
        const payload = {
          firebaseKey,
          word: document.getElementById('new-word').value,
          description: document.getElementById('new-word-description').value,
          private: document.getElementById('private').checked,
          language: document.getElementById('language-dropdown').value,
        };
        await updateWord(payload);
        if (e.target.id.includes('update-word-user')) {
          await getUserWords(user);
        } else {
          await getCommunityWords();
        }

        alert('Word Submitted!');
        document.getElementById('close-modal-btn').click();
      }
    }
  });
};

export default formEvents;
