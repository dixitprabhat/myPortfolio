import { Component, computed, signal, ChangeDetectionStrategy, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PROJECTS, ProjectCategory, Project } from '../../data/portfolio.data';
import { LanguageService } from '../../services/language.service';

type FilterOption = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  readonly languageService = inject(LanguageService);
  private autoSlideTimer: ReturnType<typeof setInterval> | null = null;
  readonly isPaused = signal<boolean>(false);

  readonly projects = PROJECTS;
  readonly selectedProject = signal<Project | null>(null);

  readonly filters: { id: FilterOption; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'fullstack', label: 'Enterprise & Full Stack' },
    { id: 'frontend', label: 'Frontend Applications' },
  ];

  readonly activeFilter = signal<FilterOption>('all');
  readonly selectedTech = signal<string>('All');
  readonly searchQuery = signal<string>('');
  readonly currentIndex = signal<number>(0);
  readonly itemsPerPage = 3;

  readonly allTechTags = computed(() => {
    const set = new Set<string>();
    this.projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  });

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const tech = this.selectedTech();
    const q = this.searchQuery().toLowerCase().trim();

    return this.projects.filter((project) => {
      const matchCategory = filter === 'all' || project.category === filter;
      const matchTech = tech === 'All' || project.tags.includes(tech);
      const matchQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchCategory && matchTech && matchQuery;
    });
  });

  readonly totalPages = computed(() => {
    return Math.max(1, Math.ceil(this.filteredProjects().length / this.itemsPerPage));
  });

  readonly visibleProjects = computed(() => {
    const list = this.filteredProjects();
    const start = this.currentIndex() * this.itemsPerPage;
    return list.slice(start, start + this.itemsPerPage);
  });

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  private startAutoSlide(): void {
    this.stopAutoSlide();
    this.autoSlideTimer = setInterval(() => {
      if (!this.isPaused() && this.totalPages() > 1) {
        this.nextSlide();
      }
    }, 3500);
  }

  private stopAutoSlide(): void {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
      this.autoSlideTimer = null;
    }
  }

  pauseAutoSlide(): void {
    this.isPaused.set(true);
  }

  resumeAutoSlide(): void {
    this.isPaused.set(false);
  }

  setFilter(filter: FilterOption): void {
    this.activeFilter.set(filter);
    this.currentIndex.set(0);
  }

  setTechFilter(tech: string): void {
    this.selectedTech.set(tech);
    this.currentIndex.set(0);
  }

  clearFilters(): void {
    this.activeFilter.set('all');
    this.selectedTech.set('All');
    this.searchQuery.set('');
    this.currentIndex.set(0);
  }

  nextSlide(): void {
    const total = this.totalPages();
    if (total <= 1) return;
    const next = (this.currentIndex() + 1) % total;
    this.currentIndex.set(next);
  }

  prevSlide(): void {
    const total = this.totalPages();
    if (total <= 1) return;
    const prev = (this.currentIndex() - 1 + total) % total;
    this.currentIndex.set(prev);
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.totalPages()) {
      this.currentIndex.set(index);
    }
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i);
  }

  openCaseStudy(project: Project): void {
    this.selectedProject.set(project);
    this.pauseAutoSlide();
  }

  closeCaseStudy(): void {
    this.selectedProject.set(null);
    this.resumeAutoSlide();
  }
}
