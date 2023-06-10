import firebase from 'firebase';
import client from '../client';

const endpoint = client.databaseURL;

const getSingleUser = async (firebaseKey) => {
  try {
    const response = await fetch(`${endpoint}/users/${firebaseKey}.json`, {
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

const getUsers = async () => {
  try {
    const response = await fetch(`${endpoint}/users.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let responseObj = response.json();
    return Object.values(responseObj);
  } catch (e) {
    console.log(e);
  }
};

const updateUser = async (payload) => {
  try {
    const response = await fetch(
      `${endpoint}/users/${payload.firebaseKey}.json`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

const createUserOnSignIn = async () => {
  let userData = firebase.auth().currentUser;
  let userObj = {
    uid: `${userData.uid}`,
    email: `${userData.email}`,
    photoUrl: `${userData.photoURL}`,
    displayName: `${userData.displayName}`,
  };
  if (userData.metadata.creationTime === userData.metadata.lastSignInTime) {
    console.log('user for the first time');
    try {
      const response = await fetch(`${endpoint}/users.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj),
      });
      const fbKeyObj = await response.json();
      const fbKey = fbKeyObj.name;
      updateUser({ firebaseKey: fbKey });
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log('user already present');
  }
};

// const addFavoriteWord = () =>

export { getSingleUser, createUserOnSignIn, getUsers };
