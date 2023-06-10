import { filterBtnsCommunity, filterBtnsUser } from '../components/filtersBtns';
import { showCommunityWords, showUserWords } from '../pages/words';
import {
  returnCommunityWords,
  returnUserWords,
} from '../utils/databaseCalls/wordData';
import { searchResultsForSort } from './searchEvents';

const sortEvents = (user) => {
  const sortNameAtoZ = (e, wordsArr) => {
    wordsArr.sort((a, b) => {
      const nameA = a.word.toUpperCase();
      const nameB = b.word.toUpperCase();
      console.log('nameA', nameA);
      console.log('nameB', nameB);
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    if (e.target.id.includes('sort-name-user')) {
      showUserWords(wordsArr);
    } else {
      showCommunityWords(wordsArr);
    }
  };
  const sortNameZtoA = (e, wordsArr) => {
    wordsArr.sort((a, b) => {
      const nameA = a.word.toUpperCase();
      const nameB = b.word.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    if (e.target.id.includes('sort-name-user')) {
      showUserWords(wordsArr);
    } else {
      showCommunityWords(wordsArr);
    }
  };
  const sortLanguageAtoZ = (e, wordsArr) => {
    wordsArr.sort((a, b) => {
      const languageA = a.language.toUpperCase();
      const languageB = b.language.toUpperCase();
      if (languageA < languageB) {
        return -1;
      }
      if (languageA > languageB) {
        return 1;
      }
      return 0;
    });
    if (e.target.id.includes('sort-language-user')) {
      showUserWords(wordsArr);
    } else {
      showCommunityWords(wordsArr);
    }
  };
  const sortLanguageZtoA = (e, wordsArr) => {
    wordsArr.sort((a, b) => {
      const languageA = a.language.toUpperCase();
      const languageB = b.language.toUpperCase();
      console.log();
      if (languageA > languageB) {
        return -1;
      }
      if (languageA < languageB) {
        return 1;
      }
      return 0;
    });
    if (e.target.id.includes('sort-language-user')) {
      showUserWords(wordsArr);
    } else {
      showCommunityWords(wordsArr);
    }
  };

  document
    .getElementById('sort-select')
    .addEventListener('change', async (e) => {
      if (e.target.value.includes('user')) {
        let words = [];
        if (document.getElementById('searchbox-input-user').value === '') {
          words = await returnUserWords(user);
        } else {
          words = searchResultsForSort;
        }
        if (e.target.value === 'sort-name-user-AtoZ') {
          sortNameAtoZ(e, words);
        }
        if (e.target.value === 'sort-name-user-ZtoA') {
          sortNameZtoA(e, words);
        }
        if (e.target.value === 'sort-language-user-AtoZ') {
          sortLanguageAtoZ(e, words);
        }
        if (e.target.value === 'sort-language-user-ZtoA') {
          sortLanguageZtoA(e, words);
        }
      }
      if (e.target.value.includes('community')) {
        let words = [];
        if (document.getElementById('searchbox-input-community').value === '') {
          words = await returnUserWords(user);
        } else {
          words = searchResultsForSort;
        }
        if (e.target.value === 'sort-name-community-AtoZ') {
          sortNameAtoZ(e, words);
        }
        if (e.target.value === 'sort-name-community-ZtoA') {
          sortNameZtoA(e, words);
        }
        if (e.target.value === 'sort-language-community-AtoZ') {
          sortLanguageAtoZ(e, words);
        }
        if (e.target.value === 'sort-language-community-ZtoA') {
          sortLanguageZtoA(e, words);
        }
      }
    });
};

export default sortEvents;
