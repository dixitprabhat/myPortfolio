import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { PORTFOLIO } from '../../data/portfolio.data';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly viewportScroller = inject(ViewportScroller);
  readonly portfolio = PORTFOLIO;

  scrollTo(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
