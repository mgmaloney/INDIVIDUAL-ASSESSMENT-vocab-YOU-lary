import renderToDom from '../utils/renderToDom';

const selectVocab = (obj = {}) => {
  let domString = `
    <select class="form-select" aria-label="select language" id="langauge-dropdown">
      <option ${obj.language ? '' : 'selected'}>Choose a language</option>
      <option ${
        obj.language === 'javascript' ? 'selected' : ''
      } value="javascript">JavaScript</option>
      <option ${
        obj.language === 'css' ? 'selected' : ''
      } value="css">CSS</option>
      <option ${
        obj.language === 'css' ? 'selected' : ''
      } value="html">HTML</option>
      <option id="add-a-language option" value="add-language">Add a Language</option>
    </select>
  `;
  return domString;
};

export default selectVocab;
