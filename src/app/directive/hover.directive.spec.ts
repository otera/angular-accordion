import { HoverDirective } from './hover.directive';
import { ElementRef, Renderer2 } from '@angular/core';

let el: ElementRef;
let renderer: Renderer2;

describe('HoverDirective', () => {
  it('should create an instance', () => {
    const directive = new HoverDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
