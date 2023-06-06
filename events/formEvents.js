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
  });
};

export default formEvents;
