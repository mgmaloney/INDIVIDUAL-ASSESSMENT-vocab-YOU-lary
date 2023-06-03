import renderToDom from '../utils/renderToDom';

const selectVocab = (obj = {}) => {
  let domString = `
    <select class="form-select" aria-label="select language" id="language-dropdown">
      <option selected value="">Choose a language</option>
      <option value="javascript">JavaScript</option>
      <option value="css">CSS</option>
      <option value="html">HTML</option>
      <option id="add-a-language option" value="add-language">Add a Language</option>
    </select>
  `;
  return domString;
};

export default selectVocab;
