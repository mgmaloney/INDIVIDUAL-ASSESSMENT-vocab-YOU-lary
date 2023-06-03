import showWords from '../../pages/words';
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
    console.log(response);
    let wordsObj = await response.json();
    let words = Object.values(wordsObj);
    if (words) {
      await showWords(words);
    } else {
      words = [];
      await showWords(words);
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

const getPublicWords = async () => {
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
    return await response.json();
  } catch (e) {
    console.log(e);
  }
  return response.json();
};

const deleteWord = async (firebaseKey) => {
  try {
    const response = fetch(`${endpoint}/word/${firebaseKey}.json`, {
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
    const response = fetch(`${endpoint}/books/${payload.firebaseKey}.json`, {
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
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

const userFilterByLanguage = async (user, language) => {
  try {
    const response = fetch(
      `${endpoint}/books.json?orderBy="uid"&equalTo="${user.uid}&orderBy="language"&equalTo="${language}"`,
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
      `${endpoint}/books.json?orderBy="private"&equalTo=false&orderBy="language"&equalTo="${language}"`,
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
  getPublicWords,
  createWord,
  updateWord,
  publicFilterByLanguage,
  userFilterByLanguage,
  deleteWord,
};