const renderToDom = (divId, htmlToRender) => {
  document.getElementById(`${divId}`).innerHTML = htmlToRender;
};

export default renderToDom;
