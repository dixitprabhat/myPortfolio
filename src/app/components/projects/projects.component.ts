import { Component, computed, signal, ChangeDetectionStrategy, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PROJECTS, ProjectCategory, Project } from '../../data/portfolio.data';

type FilterOption = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private autoSlideTimer: ReturnType<typeof setInterval> | null = null;
  readonly isPaused = signal<boolean>(false);

  readonly projects = PROJECTS;

  readonly filters: { id: FilterOption; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'fullstack', label: 'Enterprise & Full Stack' },
    { id: 'frontend', label: 'Frontend Applications' },
  ];

  readonly activeFilter = signal<FilterOption>('all');
  readonly currentIndex = signal<number>(0);
  readonly itemsPerPage = 3;

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === filter);
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
}
