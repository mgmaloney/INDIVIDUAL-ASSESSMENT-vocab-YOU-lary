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

const modalHideAndReset = () => {
  $('#add-word-modal-user').modal('hide');
  $('#add-word-modal-user').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
  });
  $('#add-word-modal-community').modal('hide');
  $('#add-word-modal-community').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
  });
};

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
    if (e.target.id.includes('submit-new-word')) {
      e.preventDefault();
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
          modalHideAndReset();
          await getUserWords(user);
        } else {
          modalHideAndReset();
          await getCommunityWords();
        }
        alert('Word Submitted!');
      }
    }
    if (e.target.id.includes('update-word')) {
      e.preventDefault();
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
          modalHideAndReset();
        } else if (
          payloadComparisonStr === payloadStr &&
          e.target.id.includes('update-word-community')
        ) {
          modalHideAndReset();
        } else if (
          payloadComparisonStr !== payloadStr &&
          preUpdatedWord.copied !== true
        ) {
          console.log('this working?');
          await updateWord(payload);
          alert('Word Updated!');
          if (e.target.id.includes('update-word-user')) {
            modalHideAndReset();
            await getUserWords(user);
          } else {
            modalHideAndReset();
            await getCommunityWords();
          }
        } else if (
          payloadComparisonStr !== payloadStr &&
          preUpdatedWord.copied
        ) {
          payload.copied = true;
          payload.editedCopy = true;
          await updateWord(payload);
          alert('Word Updated!');
          if (e.target.id.includes('update-word-user')) {
            modalHideAndReset();
            await getUserWords(user);
          } else {
            modalHideAndReset();
            await getCommunityWords();
          }
        }
      }
    }
  });
};

export default formEvents;
