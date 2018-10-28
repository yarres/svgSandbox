import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimelineMax, TweenLite, Power2 } from 'gsap';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss']
})
export class BubblesComponent implements OnInit {
  constructor() {}
  @ViewChild('bubble')
  private _bubble: ElementRef;

  private get bubble(): HTMLElement {
    return this._bubble.nativeElement;
  }

  launchAnimation() {
    const tl = new TimelineMax();
    return tl.from(this._bubble.nativeElement, 0.5, {
      scaleY: 10,
      transformOrigin: 'bottom',
      ease: Power2.easeOut
    });
  }

  ngOnInit() {}
}
