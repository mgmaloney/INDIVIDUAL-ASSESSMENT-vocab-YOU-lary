import renderToDom from '../utils/renderToDom';
import selectVocab from './selectVocab';

const addWordModal = (obj = {}) => {
  // const languageDropdownOptions = () => {
  //   const languages = await getLanguages
  // }

  let domString = `
  <button
    type="button"
    class="btn btn-primary modal-button"
    data-bs-toggle="modal"
    data-bs-target="#add-word-modal"
  >
  Add a Word!
  </button>
  <div
      class="modal fade"
      id="add-word-modal"
      tabindex="-1"
      aria-labelledby="add-word-modal-fade-label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="add-word-modal-title">Add a Word!</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="word-form" id=${
              obj.firebase ? `update-word--${obj.firebase}` : 'submit-word'
            }>
              <input
                class="form-element"
                type="text"
                name="word"
                placeholder="New Word"
                id="new-word"
                value="${obj.word || ''}"
              />
              <input
                class="form-element"
                type="text"
                name="description"
                placeholder="Description"
                id="new-word-description"
                value="${obj.description || ''}"
              />
              ${selectVocab()}
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="private" ${
                  obj.private ? 'checked' : ''
                }>
                <label class="form-check-label" for="private">Private?</label>
              </div>
              <button
                id="submit-new-word"
                type="submit"
                class="btn btn-secondary"
                value=""
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button
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
  renderToDom('add-word', domString);
};

export default addWordModal;
