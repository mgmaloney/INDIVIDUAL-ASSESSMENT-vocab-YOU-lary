import firebase from 'firebase';
import client from '../client';

const endpoint = client.responsebaseURL;

const getSingleUser = async (firebaseKey) => {
  try {
    const response = await fetch(`${endpoint}/users/${firebaseKey}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

const createUserOnSignIn = async () => {
  let userData = firebase.auth().currentUser;
  if (userData.metadata.creationTime === userData.metadata.lastSignInTime) {
    console.log('user for the first time');
    try {
      const response = await fetch(`${endpoint}/users.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          uid: `${userData.uid}`,
          email: `${userData.email}`,
          photoUrl: `${userData.photoURL}`,
        },
      });
      return response.json();
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log('user already present');
  }
};

// const addFavoriteWord = () =>

export { getSingleUser, createUserOnSignIn };
