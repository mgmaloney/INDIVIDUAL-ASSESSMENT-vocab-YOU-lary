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
    return await response.json();
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
  try {
    const response = fetch(
      `${endpoint}/words.json?orderBy="uid"&equalTo="${user.uid}&orderBy="language"&equalTo="${language}"`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

const publicFilterByLanguage = async (language) => {
  try {
    const response = fetch(
      `${endpoint}/words.json?orderBy="private"&equalTo=false&orderBy="language"&equalTo="${language}"`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

const getFavoriteWords = async () => {};

export {
  getSingleWord,
  getUserWords,
  getCommunityWords,
  createWord,
  updateWord,
  publicFilterByLanguage,
  userFilterByLanguage,
  deleteWord,
};
