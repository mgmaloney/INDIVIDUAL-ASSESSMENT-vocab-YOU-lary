import renderToDom from '../utils/renderToDom';

const selectVocab = () => {
  let domString = `
    <select id="language-dropdown" aria-label="select language" >
      <option value="">Choose a language</option>
      <option value="javascript">JavaScript</option>
      <option value="css">CSS</option>
      <option value="html">HTML</option>
      <option id="add-a-language option" value="add-language">Add a Language</option>
    </select>
  `;
  return domString;
};

export default selectVocab;
