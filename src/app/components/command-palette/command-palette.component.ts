import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PORTFOLIO } from '../../data/portfolio.data';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { ToastService } from '../../services/toast.service';
import { PLATFORM_ID } from '@angular/core';

export interface CommandAction {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Social' | 'Settings';
  icon: string;
  shortcut?: string;
  perform: () => void;
}

@Component({
  selector: 'app-command-palette',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './command-palette.component.html',
  styleUrl: './command-palette.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandPaletteComponent {
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);
  private readonly toastService = inject(ToastService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly isOpen = signal(false);
  readonly searchQuery = signal('');
  readonly selectedIndex = signal(0);
  readonly portfolio = PORTFOLIO;

  @ViewChild('searchInput') searchInputRef?: ElementRef<HTMLInputElement>;

  private readonly actionsList: CommandAction[] = [
    {
      id: 'resume-download',
      title: 'Download Resume (PDF)',
      category: 'Actions',
      icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
      shortcut: 'CV',
      perform: () => {
        if (isPlatformBrowser(this.platformId)) {
          const a = document.createElement('a');
          a.href = PORTFOLIO.resumePath;
          a.target = '_blank';
          a.download = '';
          a.click();
          this.toastService.show('Downloading Resume PDF...');
        }
      },
    },
    {
      id: 'copy-email',
      title: 'Copy Email Address (dxtprabh87@gmail.com)',
      category: 'Actions',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      perform: () => {
        if (isPlatformBrowser(this.platformId)) {
          navigator.clipboard.writeText(PORTFOLIO.email);
          this.toastService.show(this.languageService.t.emailCopied);
        }
      },
    },
    {
      id: 'copy-phone',
      title: 'Copy Phone Number (+91 9598 208 182)',
      category: 'Actions',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      perform: () => {
        if (isPlatformBrowser(this.platformId)) {
          navigator.clipboard.writeText(PORTFOLIO.phone);
          this.toastService.show('Phone number copied to clipboard!');
        }
      },
    },
    {
      id: 'nav-home',
      title: 'Jump to Home',
      category: 'Navigation',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      perform: () => this.scrollTo('home'),
    },
    {
      id: 'nav-skills',
      title: 'Jump to Skills & Stack',
      category: 'Navigation',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      perform: () => this.scrollTo('skills'),
    },
    {
      id: 'nav-projects',
      title: 'Jump to Enterprise Projects',
      category: 'Navigation',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      perform: () => this.scrollTo('projects'),
    },
    {
      id: 'nav-experience',
      title: 'Jump to Work Experience',
      category: 'Navigation',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      perform: () => this.scrollTo('experience'),
    },
    {
      id: 'nav-education',
      title: 'Jump to Education & Certifications',
      category: 'Navigation',
      icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
      perform: () => this.scrollTo('education'),
    },
    {
      id: 'nav-contact',
      title: 'Jump to Contact',
      category: 'Navigation',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      perform: () => this.scrollTo('contact'),
    },
    {
      id: 'social-github',
      title: 'Open GitHub Profile',
      category: 'Social',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      perform: () => {
        if (isPlatformBrowser(this.platformId)) {
          window.open(PORTFOLIO.github, '_blank');
        }
      },
    },
    {
      id: 'social-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Social',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z',
      perform: () => {
        if (isPlatformBrowser(this.platformId)) {
          window.open(PORTFOLIO.linkedin, '_blank');
        }
      },
    },
    {
      id: 'theme-toggle',
      title: 'Toggle Theme (Dark / Light)',
      category: 'Settings',
      icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
      perform: () => {
        this.themeService.toggleTheme();
        this.toastService.show('Theme updated!');
      },
    },
    {
      id: 'lang-toggle',
      title: 'Toggle Language (English / Hindi)',
      category: 'Settings',
      icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
      perform: () => {
        this.languageService.toggleLanguage();
        this.toastService.show(`Language switched to ${this.languageService.currentLang() === 'en' ? 'English' : 'Hindi'}`);
      },
    },
  ];

  readonly filteredActions = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.actionsList;
    return this.actionsList.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );
  });

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.toggleOpen();
    } else if (event.key === 'Escape' && this.isOpen()) {
      this.close();
    }
  }

  toggleOpen(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  open(): void {
    this.isOpen.set(true);
    this.searchQuery.set('');
    this.selectedIndex.set(0);
    setTimeout(() => {
      this.searchInputRef?.nativeElement.focus();
    }, 50);
  }

  close(): void {
    this.isOpen.set(false);
  }

  executeAction(action: CommandAction): void {
    action.perform();
    this.close();
  }

  private scrollTo(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
