import domBuilder from './domBuilder';
import navBar from '../components/navbar';
import { createUserOnSignIn } from './databaseCalls/userData';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  createUserOnSignIn();
  domBuilder(); // BUILD THE DOM
  navBar(); //adds the navbar
  domEvents(user); // starEvent(user); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  // DYNAMICALLY ADD THE NAV
  // navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // // TODO: Put all books on the DOM on App load
};

export default startApp;
