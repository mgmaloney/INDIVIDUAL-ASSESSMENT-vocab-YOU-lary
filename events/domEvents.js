import { signOut } from '../utils/auth';
import clearDom from '../utils/clearDom';

const domEvents = (user) => {
  const signOutEventListener = () => {
    document.getElementById('google-auth').addEventListener('click', () => {
      signOut();
      clearDom();
    });
  };

  const allOtherDomEvents = (e) => {
    document
      .getElementById('main-container')
      .addEventListener('click', async (e) => {
        if (e.target.id.includes('delete-user')) {
          const [, firebaseKey] = e.target.id.split('--');
          await deleteWord(firebaseKey);
          await getUserWords(user.uid);
        }
        if (e.target.id.includes('delete-community')) {
          const [, firebaseKey] = e.target.id.split('--');
          await deleteWord(firebaseKey);
          await getCommunityWords(user.uid);
        }
      });
  };

  signOutEventListener();
  allOtherDomEvents();
};

export default domEvents;
