import firebase from 'firebase';
import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

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
      <img src="${firebase.auth().currentUser.photoURL}">
      <h6 class="card-subtitle mb-2 text-muted card-username">Created by You!</h6>
      `;
      return cardUserInfo;
    }
    let cardUserInfo = `
    <img src="${firebase.auth().currentUser.photoURL}">
    <h6 class="card-subtitle mb-2 text-muted card-username">Created by You!</h6>
    `;
    return cardUserInfo;
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
          <p class="card-text description">${word.description}</p>
            <button id="edit-user--${word.firebaseKey}">Edit</button>
            <button id="delete-user--${word.firebaseKey}">Delete</button>
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
      <img class="profile-pic" src="${firebase.auth().currentUser.photoURL}">
      <h6 class="card-subtitle mb-2 text-muted card-username">Created by You!</h6>
      `;
      return cardUserInfo;
    }
    let cardUserInfo = `
    <img class="profile-pic" src="${firebase.auth().currentUser.photoURL}">
    <h6 class="card-subtitle mb-2 text-muted card-username">Created by You!</h6>
    `;
    return cardUserInfo;
  };

  const currentVsCommunityCardBtns = (word) => {
    if (word.uid === `${firebase.auth().currentUser.uid}`) {
      let cardBtns = `
        <button id="edit-community--${word.firebaseKey}">Edit</button>
        <button id="delete-community--${word.firebaseKey}">Delete</button>
      `;
      return cardBtns;
    }
    let cardBtn = `<button id="add-entry-button">Add to my entries</button>`;
    return cardBtn;
  };

  if (array.length) {
    let domString = '';
    array.forEach((word) => {
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
          <p class="card-text description">${word.description}</p>
          ${currentVsCommunityCardBtns(word)}
        </div>
      </div>
      `;
    });
    renderToDom('words', domString);
  } else {
    emptyWords();
  }
};

export { showUserWords, showCommunityWords };
