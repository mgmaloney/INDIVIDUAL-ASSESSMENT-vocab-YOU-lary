import domBuilder from './domBuilder';
import navBar from '../components/navbar';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  // domEvents(user); // starEvent(user); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // // TODO: Put all books on the DOM on App load
};

export default startApp;
