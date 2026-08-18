import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly viewportScroller = inject(ViewportScroller);
  readonly portfolio = PORTFOLIO;
  readonly currentYear = new Date().getFullYear();

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
