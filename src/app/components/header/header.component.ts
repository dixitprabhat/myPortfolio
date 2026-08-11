import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { ViewportScroller, NgClass } from '@angular/common';
import { NAV_LINKS, PORTFOLIO } from '../../data/portfolio.data';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly viewportScroller = inject(ViewportScroller);
  readonly themeService = inject(ThemeService);

  readonly portfolio = PORTFOLIO;
  readonly navLinks = NAV_LINKS;
  readonly activeLink = signal('home');
  readonly menuOpen = signal(false);

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.activeLink.set(elementId);
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
