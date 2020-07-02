import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.scss'],
  animations: [
    trigger('accordion', [
      transition(':enter', [
        style({ height: '0', opacity: 0, overflow: 'hidden' }),
        animate('0.2s', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: '1', overflow: 'hidden' }),
        animate('0.2s', style({ height: '0' })),
      ]),
    ]),
  ],
})
export class AccordionGroupComponent {
  @Input() title: string;
  @Output() toggleEmitter: EventEmitter<
    AccordionGroupComponent
  > = new EventEmitter<AccordionGroupComponent>();

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  // アコーディオン開閉状態
  expanded: boolean = false;

  constructor() {}

  /**
   * タイトルクリックで、親にイベントを通知
   */
  onToggle() {
    this.toggleEmitter.next(this);
  }

  /**
   * アコーディオン開閉
   */
  toggle() {
    this.expanded = !this.expanded;
  }

  /**
   * アコーディオンを閉じる
   */
  close() {
    this.expanded = false;
  }
}
