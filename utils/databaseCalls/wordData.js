import { showCommunityWords, showUserWords } from '../../pages/words';
import client from '../client';

const endpoint = client.databaseURL;

const getUserWords = async (user) => {
  try {
    const response = await fetch(
      `${endpoint}/words.json?orderBy="uid"&equalTo="${user.uid}"`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let wordsObj = await response.json();
    let words = Object.values(wordsObj);
    if (words) {
      await showUserWords(words);
    } else {
      words = [];
      await showUserWords(words);
    }
  } catch (e) {
    console.log(e);
  }
};

const getSingleWord = async (firebaseKey) => {
  try {
    const response = await fetch(`${endpoint}/words/${firebaseKey}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

const getCommunityWords = async () => {
  try {
    const response = await fetch(
      `${endpoint}/words.json?orderBy="private"&equalTo=false`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const wordsObj = await response.json();
    let words = Object.values(wordsObj);
    showCommunityWords(words);
  } catch (e) {
    console.log(e);
  }
  return response.json();
};

const deleteWord = async (firebaseKey) => {
  try {
    const response = fetch(`${endpoint}/words/${firebaseKey}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (e) {}
};

const updateWord = async (payload) => {
  try {
    const response = fetch(`${endpoint}/words/${payload.firebaseKey}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    // return await response.json();
  } catch (e) {
    console.log(e);
  }
};

const createWord = async (payload) => {
  try {
    const response = await fetch(`${endpoint}/words.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    let responseJSON = await response.json();
    console.log(responseJSON);
    let firebaseKey = responseJSON.name;
    await updateWord({ firebaseKey });
  } catch (e) {
    console.log(e);
  }
};

const userFilterByLanguage = async (user, language) => {
  let words = [];
  try {
    const response = await fetch(
      `${endpoint}/words.json?orderBy="uid"&equalTo="${user.uid}"`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let wordsObj = await response.json();
    words = Object.values(wordsObj);
  } catch (e) {
    console.log(e);
  }
  const languageWords = words.filter((word) => word.language === `${language}`);
  console.log(languageWords);
  showUserWords(languageWords);
};

const publicFilterByLanguage = async (language) => {
  let words = [];
  try {
    const response = fetch(
      `${endpoint}/words.json?orderBy="private"&equalTo=false`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let wordsObj = await response.json();
    words = Object.values(wordsObj);
  } catch (e) {
    console.log(e);
  }
  const languageWords = words.filter((word) => word.language === `${language}`);
  console.log(languageWords);
};

const getFavoriteWords = async () => {
  try {
    const response = await fetch(
      `${endpoint}/words.json?orderBy="favorite"&equalTo=true`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
};

const getAllWords = async (user) => {
  let communityWords = [];
  let userWords = [];
  try {
    const response = await fetch(
      `${endpoint}/words.json?orderBy="private"&equalTo=false`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let communityWordsObj = await response.json();
    let communityWordsArr = Object.values(communityWordsObj);
    if (communityWordsArr) {
      communityWords = communityWordsArr;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
  }
  try {
    const response = await fetch(
      `${endpoint}/words.json?orderBy="uid"&equalTo="${user.uid}"`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let userWordsObj = await response.json();
    let userWordsArr = Object.values(userWordsObj);
    if (userWordsArr) {
      userWords = userWordsArr;
    } else {
      words = [];
    }
  } catch (e) {
    console.log(e);
  }
  const allWords = communityWords.concat(userWords);
  return allWords;
};

const getLanguages = async (user) => {
  let words = await getAllWords(user);
  let languages = ['javascript', 'css', 'html'];
  words.forEach((word) => {
    if (!languages.includes(word.language)) {
      languages.push(word.language);
    }
  });
  console.log(languages);
  return languages;
};

export {
  getSingleWord,
  getUserWords,
  getCommunityWords,
  createWord,
  updateWord,
  publicFilterByLanguage,
  userFilterByLanguage,
  deleteWord,
  getLanguages,
};
