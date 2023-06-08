import {
  addWordModalCommunity,
  addWordModalUser,
} from '../components/addWordModal';
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
import 'jquery';

const formEvents = async (user) => {
  let languageBox = document.getElementById('add-language-box');

  const getLanguageBoxOrDropdownValue = () => {
    if (languageBox.style.visibility === 'visible') {
      console.log(languageBox.value);
      return languageBox.value;
    } else {
      return document.getElementById('language-dropdown').value;
    }
  };

  document
    .getElementById('language-dropdown')
    .addEventListener('change', (e) => {
      if (e.target.value === 'add-language') {
        languageBox.style.visibility = 'visible';
      } else {
        languageBox.style.visibility = 'hidden';
      }
    });

  document.getElementById('app').addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-new-word')) {
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
          language: `${getLanguageBoxOrDropdownValue()}`,
          timestamp: `${Date.now()}`,
          uid: `${user.uid}`,
        };
        await createWord(payload);
        if (e.target.id === 'submit-new-word-user') {
          await getUserWords(user);
          $('#add-word-modal-user').modal('hide');
        } else {
          await getCommunityWords();
          $('#add-word-modal-community').modal('hide');
        }
        alert('Word Submitted!');
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
        let preUpdatedWord = await getSingleWord(firebaseKey);
        const payloadComparison = {
          firebaseKey,
          word: preUpdatedWord.word,
          description: preUpdatedWord.description,
          private: preUpdatedWord.private,
          language: preUpdatedWord.language,
        };
        const payload = {
          firebaseKey,
          word: document.getElementById('new-word').value,
          description: document.getElementById('new-word-description').value,
          private: document.getElementById('private').checked,
          language: document.getElementById('language-dropdown').value,
        };
        let payloadStr = JSON.stringify(payload);
        let payloadComparisonStr = JSON.stringify(payloadComparison);
        if (
          payloadComparisonStr === payloadStr &&
          e.target.id.includes('update-word-user')
        ) {
          $('#add-word-modal-user').modal('hide');
          console.log('click worked?');
        } else if (
          payloadComparisonStr === payloadStr &&
          e.target.id.includes('update-word-community')
        ) {
          $('#add-word-modal-community').modal('hide');
        } else if (
          payloadComparisonStr !== payloadStr &&
          preUpdatedWord.copied === false
        ) {
          await updateWord(payload);
          alert('Word Updated!');
          if (e.target.id.includes('update-word-user')) {
            $('#add-word-modal-user').modal('hide');
            await getUserWords(user);
          } else {
            $('#add-word-modal-community').modal('hide');
            await getCommunityWords();
          }
        } else if (
          payloadComparisonStr !== payloadStr &&
          preUpdatedWord.copied
        ) {
          payload.copied = true;
          payload.editedCopy = true;
          await updateWord(payload);
          if (e.target.id.includes('update-word-user')) {
            $('#add-word-modal-user').modal('hide');
            await getUserWords(user);
          } else {
            $('#add-word-modal-community').modal('hide');
            await getCommunityWords();
          }
        }
      }
    }
  });
};

export default formEvents;
