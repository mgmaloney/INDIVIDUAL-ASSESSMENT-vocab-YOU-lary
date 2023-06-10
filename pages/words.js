import firebase from 'firebase';
import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import { getSingleUser, getUsers } from '../utils/databaseCalls/userData';

const users = getUsers();

const showUserWords = async (array) => {
  clearDom();

  // console.log(array);

  const emptyWords = () => {
    const domString = `
      <h1>No Words</h1>
    `;
    renderToDom('words', domString);
  };

  const userCardInfo = (word) => {
    if (word.uid === `${firebase.auth().currentUser.uid}`) {
      let cardUserInfo = `
      <div class="cardUserInfo">
        <img src="${firebase.auth().currentUser.photoURL}">
        <h6 class="card-subtitle mb-2 text-muted card-username">Created by You!</h6>
      </div>
      `;
      return cardUserInfo;
    } else {
      let cardUserInfo = `
        <img src="${getSingleUser(word.uid).photoURL}">
        <h6 class="card-subtitle mb-2 text-muted card-username">Created by You!</h6>
        `;
      return cardUserInfo;
    }
  };

  if (array.length) {
    let domString = '';
    array.forEach((word) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title card-word">${word.word}</h5>
          <div id="card-user">
            ${userCardInfo(word)}
          </div>
          <h6 class="card-subtitle mb-2 text-muted card-language">Language: ${
            word.language
          }</h6>
          <p class="card-text description">Definition: ${word.description}</p>
            <button class="card-btn" id="edit-user--${
              word.firebaseKey
            }">Edit</button>
            <button class="card-btn" id="delete-user--${
              word.firebaseKey
            }">Delete</button>
        </div>
      </div>
      `;
    });
    renderToDom('words', domString);
  } else {
    emptyWords();
  }
};

const showCommunityWords = async (array) => {
  clearDom();

  // console.log(array);

  const emptyWords = () => {
    const domString = `
      <h1>No Words</h1>
    `;
    renderToDom('words', domString);
  };

  const userCardInfo = (word) => {
    if (word.uid === `${firebase.auth().currentUser.uid}`) {
      let cardUserInfo = `
      <div class="cardUserInfo>
      <img class="profile-pic" src="${firebase.auth().currentUser.photoURL}">
      <h6 class="card-subtitle mb-2 text-muted card-username">Created by You!</h6>
      </div>
      `;
      return cardUserInfo;
    }
    let cardUserInfo = `
    <div class="cardUserInfo>
    <img class="profile-pic" src="${firebase.auth().currentUser.photoURL}">
    <h6 class="card-subtitle mb-2 text-muted card-username">Created by You!</h6>
    </div>
    `;
    return cardUserInfo;
  };

  const currentVsCommunityCardBtns = (word) => {
    if (word.uid === `${firebase.auth().currentUser.uid}`) {
      let cardBtns = `
        <button class="card-btn" id="edit-community--${word.firebaseKey}">Edit</button>
        <button class="card-btn" id="delete-community--${word.firebaseKey}">Delete</button>
      `;
      return cardBtns;
    }
    let cardBtn = `<button id="add-entry-btn--${word.firebaseKey}">Add to my entries</button>`;
    return cardBtn;
  };

  if (array.length) {
    let domString = '';
    array.forEach((word) => {
      if (!word.copied || (word.copied === true && word.editedCopy === true)) {
        domString += `
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title card-word">${word.word}</h5>
            <div id="card-user">
              ${userCardInfo(word)}
            </div>
            <h6 class="card-subtitle mb-2 text-muted card-language">Language: ${
              word.language
            }</h6>
            <p class="card-text description">Definition: ${word.description}</p>
            ${currentVsCommunityCardBtns(word)}
          </div>
        </div>
        `;
      }
    });
    renderToDom('words', domString);
  } else {
    emptyWords();
  }
};

export { showUserWords, showCommunityWords };
