import { Component, Input } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';

@Component({
  selector: 'accordion',
  template: '<ng-content></ng-content>',
  styles: [''],
})
export class AccordionComponent {
  /** アイテムを展開した場合に他のアイテムを閉じるかどうか */
  @Input() closeOthers: boolean = false;
  /** 配下にいるGroupComponent */
  protected groups: AccordionGroupComponent[] = [];

  constructor() {}

  /**
   * 単一モードの場合、開いたアイテム以外はCloseさせる
   * @param  {AccordionGroupComponent} openGroup
   */
  closeOtherPanels(openGroup: AccordionGroupComponent): void {
    if (!this.closeOthers) {
      return;
    }

    this.groups.forEach((item: AccordionGroupComponent) => {
      if (item !== openGroup) {
        item.isOpen = false;
      }
    });
  }

  /**
   * GroupComponentを追加
   * @param  {AccordionGroupComponent} group
   */
  addGroup(group: AccordionGroupComponent) {
    this.groups.push(group);
  }

  /**
   * GroupComponentを削除
   * @param  {AccordionGroupComponent} group
   */
  removeGroup(group: AccordionGroupComponent) {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
