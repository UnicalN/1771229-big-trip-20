import AbstractView from '../framework/view/abstract-view.js';

const createButtonTemplate = (isDisabled) =>
  `<button class="trip-main__event-add-btn btn btn--big btn--yellow" type="button" ${isDisabled ? 'disabled' : ''}>New event</button>`;

export default class ButtonView extends AbstractView {
  #isDisabled = false;
  #handleClick = null;
  constructor({onClick, isDisabled}) {
    super();
    this.#isDisabled = isDisabled;
    this.#handleClick = onClick;
    this.element.addEventListener('click', this.#clickHandler);
  }

  get template() {
    return createButtonTemplate(this.#isDisabled);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}
