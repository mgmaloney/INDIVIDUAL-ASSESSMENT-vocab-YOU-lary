import { showCommunityWords, showUserWords } from '../pages/words';
import {
  returnCommunityWords,
  returnUserWords,
} from '../utils/databaseCalls/wordData';

const searchEvents = (user) => {
  document.getElementById('searchbox').addEventListener('click', async (e) => {
    if (e.target.id.includes('search-btn-user')) {
      let searchTerm = document.getElementById('searchbox-input-user').value;
      let words = await returnUserWords(user);
      let searchResults = [];
      words.forEach((word) => {
        if (
          word.word.includes(searchTerm) ||
          word.language.includes(searchTerm) ||
          word.description.includes(searchTerm)
        ) {
          searchResults.push(word);
        }
      });
      showUserWords(searchResults);
    }
    if (e.target.id.includes('search-btn-community')) {
      let searchTerm = document.getElementById(
        'searchbox-input-community'
      ).value;
      let words = await returnCommunityWords();
      let searchResults = [];
      words.forEach((word) => {
        if (
          word.word.includes(searchTerm) ||
          word.language.includes(searchTerm) ||
          word.description.includes(searchTerm)
        ) {
          searchResults.push(word);
        }
      });
      showCommunityWords(searchResults);
    }
  });
};

export default searchEvents;
