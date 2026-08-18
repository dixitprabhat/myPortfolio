import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { ToastComponent } from '../toast/toast.component';
import { LanguageService } from '../../services/language.service';

import { GithubStatsComponent } from '../github-stats/github-stats.component';
import { MobileBarComponent } from '../mobile-bar/mobile-bar.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    HomeComponent,
    EducationComponent,
    SkillsComponent,
    GithubStatsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    ToastComponent,
    MobileBarComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  readonly languageService = inject(LanguageService);
  readonly scrollProgress = signal(0);
  readonly showBackToTop = signal(false);

  private scrollListener: (() => void) | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollListener = () => this.onScroll();
      window.addEventListener('scroll', this.scrollListener, { passive: true });
      this.onScroll();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    this.scrollProgress.set(Math.min(100, Math.max(0, progress)));
    this.showBackToTop.set(scrollTop > 300);
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
