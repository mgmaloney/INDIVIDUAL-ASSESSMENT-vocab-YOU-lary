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

const formEvents = () => {
  document.getElementById('app').addEventListener('click', () => {
    if (e.target.id === 'submit-new-word') {
      const payload = {
        word: document.getElementById('new-word').value,
        description: document.getElementById('new-word-description').value,
        private: document.getElementById('private').checked,
        language: document.getElementById('language-dropdown').value,
        timestamp: `${Date.now()}`,
      };
    }
  });
};

export default formEvents;
