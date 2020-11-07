export const sliderTemplate = {
  template: `<div class="slider" data-component="slider"></div>`,
  render(anchor: Element): void {
    anchor.insertAdjacentHTML('afterbegin', this.template);
  },

  getDomElement(anchor: Element): Element {
    const slider = anchor.querySelector('.slider');
    if (!slider) {
      throw new Error('The renderTemplate method was not called')
    }
    return slider;
  }
}