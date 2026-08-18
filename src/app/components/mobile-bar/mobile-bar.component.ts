import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PORTFOLIO } from '../../data/portfolio.data';
import { ToastService } from '../../services/toast.service';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-mobile-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-bar.component.html',
  styleUrl: './mobile-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileBarComponent {
  private readonly toastService = inject(ToastService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly portfolio = PORTFOLIO;

  callPhone(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${PORTFOLIO.phone.replace(/\s+/g, '')}`;
    }
  }

  copyEmail(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(PORTFOLIO.email);
      this.toastService.show('Email copied to clipboard!');
    }
  }

  openResume(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open(PORTFOLIO.resumePath, '_blank');
    }
  }

  openGithub(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open(PORTFOLIO.github, '_blank');
    }
  }
}
