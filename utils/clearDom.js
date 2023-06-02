const clearDom = () => {
  document.querySelector('#language-filters').innerHTML = '';
  document.querySelector('#words').innerHTML = '';
  document.querySelector('form-container').innerHTML = '';
};

export default clearDom;
