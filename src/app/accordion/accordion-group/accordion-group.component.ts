import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  Inject,
  EventEmitter,
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { AccordionComponent } from '../accordion.component';
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
export class AccordionGroupComponent implements OnInit, OnDestroy {
  @Input() title: string;
  /** 開閉状態が変化した場合通知 */
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter();
  @Input()
  get isOpen(): boolean {
    return this._isOpen;
  }
  set isOpen(value: boolean) {
    if (value !== this.isOpen) {
      if (value) {
        // 自身以外のComponentをCloseさせる
        this.accordion.closeOtherPanels(this);
      }
      this._isOpen = value;

      // イベントを通知
      this.isOpenChange.emit(value);
      Promise.resolve(null)
        .then(() => {
          this.isOpenChange.emit(value);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    }
  }

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  /** アコーディオン開閉状態 */
  protected _isOpen = false;
  protected accordion: AccordionComponent;
  constructor(@Inject(AccordionComponent) accordion: AccordionComponent) {
    this.accordion = accordion;
  }

  /**
   * タイトルクリックでアコーディオンを開閉
   */
  onToggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.accordion.addGroup(this);
  }

  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }
}
