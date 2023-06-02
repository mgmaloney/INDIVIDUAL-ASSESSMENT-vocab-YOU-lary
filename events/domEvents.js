import { signOut } from '../utils/auth';
import clearDom from '../utils/clearDom';

const domEvents = (user) => {
  const signOutEventListener = () => {
    document.getElementById('google-auth').addEventListener('click', () => {
      signOut();
      clearDom();
    });
  };

  signOutEventListener();
};

export default domEvents;
