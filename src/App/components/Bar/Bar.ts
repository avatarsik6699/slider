import { Component, State } from "../../../Helpers/Interfaces";

class Bar implements Component {
  template: string = `<div class="slider__bar"></div>`;
  constructor(params: State) {
    this.setTemplate(params.type);
  }

  render(anchor: Element | HTMLElement, renderParams?: any): void {
    let el = this.getRootElement(anchor);
    el.insertAdjacentHTML('beforeend', this.template);
  }

  setTemplate(type: string): void {
    const className = `slider__bar slider__bar_${type}`;
    this.template = `<div class=${className} data-component="bar"></div>`;
  }

  private getRootElement(anchor: Element): Element {
    const el = anchor.querySelector('.slider');
    if (!el) throw new Error ('Hanlde was not found');
    return el;
  }
}

export { Bar };