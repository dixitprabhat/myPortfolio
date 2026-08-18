import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { ViewportScroller, NgClass } from '@angular/common';
import { NAV_LINKS, PORTFOLIO } from '../../data/portfolio.data';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { CommandPaletteComponent } from '../command-palette/command-palette.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, CommandPaletteComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly viewportScroller = inject(ViewportScroller);
  readonly themeService = inject(ThemeService);
  readonly languageService = inject(LanguageService);

  readonly portfolio = PORTFOLIO;
  readonly navLinks = NAV_LINKS;
  readonly activeLink = signal('home');
  readonly menuOpen = signal(false);

  getNavLabel(id: string): string {
    const t = this.languageService.t;
    switch (id) {
      case 'home': return t.navHome;
      case 'skills': return t.navSkills;
      case 'projects': return t.navProjects;
      case 'experience': return t.navExperience;
      case 'education': return t.navEducation;
      case 'contact': return t.navContact;
      default: return id;
    }
  }

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

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
