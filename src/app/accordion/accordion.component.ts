import {
  Component,
  ContentChildren,
  QueryList,
  AfterViewInit,
  Input,
} from '@angular/core';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';

export enum AccordionMode {
  Single = 'single',
  Multiple = 'multiple',
}

@Component({
  selector: 'accordion',
  template: '<ng-content></ng-content>',
  styles: [''],
})
export class AccordionComponent implements AfterViewInit {
  @ContentChildren(AccordionGroupComponent) items: QueryList<
    AccordionGroupComponent
  >;
  /** 開閉は複数か単一かのモードをセット(指定なし:単一) */
  @Input() mode: AccordionMode = AccordionMode.Single;
  /** 開いて表示しているComponent */
  openItem: AccordionGroupComponent;

  constructor() {}

  ngAfterViewInit() {
    this.items.forEach((item: AccordionGroupComponent) => {
      item.toggleEmitter.subscribe(() => {
        // タイトルがクリックされたらアコーディオン開閉制御を実施
        this.expand(item);
      });
    });
  }

  /**
   * アコーディオンの開閉制御
   * @param  {AccordionGroupComponent} item
   */
  expand(item: AccordionGroupComponent) {
    // クリックされたアイテムが既にOpen済の場合はCloseして終了
    if (item == this.openItem && item.expanded) {
      return item.close();
    }

    // アコーディオンを開く
    item.toggle();
    this.openItem = item;

    // 複数モードの場合は処理終了
    if (this.mode === AccordionMode.Multiple) return;

    // 単一モードの場合、選択されたアイテム以外はCloseする
    this.items
      .filter((item) => item != this.openItem)
      .map((item) => item.close());
  }
}
