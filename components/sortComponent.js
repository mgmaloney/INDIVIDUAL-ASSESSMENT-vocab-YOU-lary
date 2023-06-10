import renderToDom from '../utils/renderToDom';

const sortDropDownUser = () => {
  let domString = `
    <select id="sort-select">
      <option value="sort-name-user-AtoZ">Sort By Name: A &#10132; Z</option>
      <option value="sort-name-user-ZtoA">Sort By Name: Z &#10132; A</option>
      <option value="sort-language-user-AtoZ">Sort By Language: A &#10132; Z</option>
      <option value="sort-language-user-ZtoA">Sort By Language: Z &#10132; A</option>
    </select>
  `;
  renderToDom('sort-div', domString);
};
const sortDropDownCommunity = () => {
  let domString = `
    <select id="sort-select">
      <option value="sort-name-community-AtoZ">Sort By Name: A &#10132; Z</option>
      <option value="sort-name-community-ZtoA">Sort By Name: Z &#10132; A</option>
      <option value="sort-language-community-AtoZ">Sort By Language: A &#10132; Z</option>
      <option value="sort-language-community-ZtoA">Sort By Language: Z &#10132; A</option>
    </select>
  `;
  renderToDom('sort-div', domString);
};

export { sortDropDownCommunity, sortDropDownUser };
