import domBuilder from './domBuilder';
import navBar from '../components/navbar';
import { createUserOnSignIn } from './databaseCalls/userData';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { getUserWords } from './databaseCalls/wordData';
import navigationEvents from '../events/navigationEvents';
import { addWordModalUser } from '../components/addWordModal';
import { filterBtnsUser } from '../components/filtersBtns';
import filterEvents from '../events/filterEvents';
import logoutButton from '../components/logoutButton';
import { sortDropDownUser } from '../components/sortComponent';
import sortEvents from '../events/sortEvents';
import searchEvents from '../events/searchEvents';
import { searchBoxUser } from '../components/searchBox';

const startApp = async (user) => {
  createUserOnSignIn();
  domBuilder();
  sortDropDownUser();
  filterBtnsUser(user); // BUILD THE DOM
  navBar(false); //adds the navbar
  addWordModalUser();
  logoutButton();
  searchBoxUser();
  searchEvents(user);
  domEvents(user); // starEvent(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  filterEvents(user);
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  sortEvents(user);
  await getUserWords(user); // // TODO: Put all books on the DOM on App load
};

export default startApp;
