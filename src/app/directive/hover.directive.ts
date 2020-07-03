import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[eventHover]',
})
export class HoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input('eventHover') className: string;

  /** mouseenterが発生したら指定のクラス名を追加 */
  @HostListener('mouseenter')
  onMouseOver() {
    if (this.isMobile()) return;
    this.renderer.addClass(this.el.nativeElement, this.className);
  }

  /** mouseleaveが発生したら指定のクラス名を削除 */
  @HostListener('mouseleave')
  onMouseOut() {
    if (this.isMobile()) return;
    this.renderer.removeClass(this.el.nativeElement, this.className);
  }

  /**
   * ユーザエージェントからモバイル(スマートフォン・タブレット)かどうか判定
   * @returns Boolean True:モバイル端末を利用
   */
  private isMobile(): Boolean {
    // OSでモバイルかどうかを判定する
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
}
