import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PORTFOLIO } from '../../data/portfolio.data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent {
  private readonly sanitizer = inject(DomSanitizer);
  readonly languageService = inject(LanguageService);
  readonly portfolio = PORTFOLIO;

  readonly isPopupOpen = signal(false);
  readonly safeResumeUrl = signal<SafeResourceUrl | null>(null);

  openPopup(): void {
    if (!this.safeResumeUrl()) {
      this.safeResumeUrl.set(
        this.sanitizer.bypassSecurityTrustResourceUrl(this.portfolio.resumePath)
      );
    }
    this.isPopupOpen.set(true);
  }

  closePopup(): void {
    this.isPopupOpen.set(false);
  }
}

