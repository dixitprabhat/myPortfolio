import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-popup',
  standalone: true,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent {
  readonly portfolio = PORTFOLIO;
  readonly isPopupOpen = signal(false);

  openPopup(): void {
    this.isPopupOpen.set(true);
  }

  closePopup(): void {
    this.isPopupOpen.set(false);
  }
}
