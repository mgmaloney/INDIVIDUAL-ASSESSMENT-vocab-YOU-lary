import domBuilder from './domBuilder';
import navBar from '../components/navbar';
import { createUserOnSignIn } from './databaseCalls/userData';
import domEvents from '../events/domEvents';
import addWordModal from '../components/addWordModal';
import formEvents from '../events/formEvents';
import { getUserWords } from './databaseCalls/wordData';

const startApp = async (user) => {
  createUserOnSignIn();
  domBuilder(); // BUILD THE DOM
  navBar(); //adds the navbar
  addWordModal();
  domEvents(user); // starEvent(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  // DYNAMICALLY ADD THE NAV
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  await getUserWords(user); // // TODO: Put all books on the DOM on App load
};

export default startApp;
