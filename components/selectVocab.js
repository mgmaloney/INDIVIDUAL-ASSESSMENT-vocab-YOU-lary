import { getLanguages } from '../utils/databaseCalls/wordData';

const selectVocab = async () => {
  let domString = `
    <select id="language-dropdown" aria-label="select language" >
      <option value="">Choose a language</option>
`;
  let languages = await getLanguages();
  console.log('langauges??', languages);
  languages.forEach((language) => {
    domString += `
    <option value="${language}">${language}</option>
    `;
  });

  domString += `
      <option value="add-language">Add a language</option>
    </select>
    <input type="text" id="add-language-box" style="visibility: hidden">
  `;
  return domString;
};

export default selectVocab;
