const clearDom = () => {
  document.querySelector('#filter-language-btns').innerHTML = '';
  document.querySelector('#words').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
};

export default clearDom;
