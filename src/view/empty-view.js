import AbstractView from '../framework/view/abstract-view';

export default class EmptyView extends AbstractView {
  get template() {
    return ('<span></span>');
  }

}
