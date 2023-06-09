import renderToDom from '../utils/renderToDom';
import selectVocab from './selectVocab';

const selectVocabStr = await selectVocab();

const addWordModalUser = (obj = {}) => {
  let domString = `
  <button
    type="button"
    class="btn btn-primary modal-button"
    data-bs-toggle="modal"
    data-bs-target="#add-word-modal-user"
  >
  Add a Word!
  </button>
  <div
      class="modal fade"
      id="add-word-modal-user"
      tabindex="-1"
      aria-labelledby="add-word-modal-fade-label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="add-word-modal-title">Add a Word!</h5>
            <button
              id="close-modal-btn-user"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form data-toggle="validator" class="word-form" id=${
              obj.firebaseKey
                ? `update-word-form-user--${obj.firebaseKey}`
                : 'submit-word-form-user'
            }>
              <input
                class="form-element form-control"
                type="text"
                name="word"
                placeholder="New Word"
                id="new-word"
                value="${obj.word || ''}"
                required
              >
              <input
                class="form-element form-control"
                type="text"
                name="description"
                placeholder="Description"
                id="new-word-description"
                value="${obj.description || ''}"
                required
              >
              ${selectVocabStr}
              <div class="form-check">
                <input type="checkbox"  id="private" ${
                  obj.private ? 'checked' : ''
                }>
                <label class="form-check-label" for="private">Private?</label>
              </div>
              <button
                id="${
                  obj.firebaseKey
                    ? `update-word-user--${obj.firebaseKey}`
                    : 'submit-new-word-user'
                }"
                type="submit"
                class="btn btn-secondary"
                value=""
              >
                Submit
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              id="close-modal-btn"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
  `;
  renderToDom('word-modal-user', domString);
  // renderToDom('add-word', domString);
};

const addWordModalCommunity = (obj = {}) => {
  // const languageDropdownOptions = () => {
  //   const languages = await getLanguages
  // }

  let domString = `
  <button
    type="button"
    class="btn btn-primary modal-button"
    data-bs-toggle="modal"
    data-bs-target="#add-word-modal-community"
  >
  Add a Word!
  </button>
  <div
      class="modal fade"
      id="add-word-modal-community"
      tabindex="-1"
      aria-labelledby="add-word-modal-fade-label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="add-word-modal-title">Add a Word!</h5>
            <button
              id="close-modal-btn-community"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form data-toggle="validator" class="word-form" id=${
              obj.firebaseKey
                ? `update-word-form-community---${obj.firebaseKey}`
                : 'submit-word-form-community'
            }>
              <input
                class="form-element form-control"
                type="text"
                name="word"
                placeholder="New Word"
                id="new-word"
                value="${obj.word || ''}"
                required
              >
              <input
                class="form-element form-control"
                type="text"
                name="description"
                placeholder="Description"
                id="new-word-description"
                value="${obj.description || ''}"
                required
              >
              ${selectVocabStr}
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="private" ${
                  obj.private ? 'checked' : ''
                }>
                <label class="form-check-label" for="private">Private?</label>
              </div>
              <button
                id="${
                  obj.firebaseKey
                    ? `update-word-community--${obj.firebaseKey}`
                    : 'submit-new-word-community'
                }"
                type="submit"
                class="btn btn-secondary"
                value=""
              >
                Submit
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              id="close-modal-btn-community"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
  `;
  renderToDom('word-modal-community', domString);
};

export { addWordModalCommunity, addWordModalUser };
