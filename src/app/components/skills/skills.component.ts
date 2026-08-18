import { Component, ChangeDetectionStrategy, signal, computed, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SKILLS, Skill } from '../../data/portfolio.data';

type CategoryFilter = 'all' | 'frontend' | 'backend' | 'database' | 'tools';

@Component({
  selector: 'app-skils',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private autoSlideTimer: ReturnType<typeof setInterval> | null = null;
  readonly isPaused = signal<boolean>(false);

  readonly skills = SKILLS;
  readonly activeCategory = signal<CategoryFilter>('all');
  readonly currentIndex = signal<number>(0);
  readonly itemsPerPage = 4;

  readonly categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' },
  ];

  readonly filteredSkills = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.skills;
    return this.skills.filter((s) => s.category === cat);
  });

  readonly totalPages = computed(() => {
    return Math.max(1, Math.ceil(this.filteredSkills().length / this.itemsPerPage));
  });

  readonly visibleSkills = computed(() => {
    const list = this.filteredSkills();
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
    }, 1200);
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

  setCategory(cat: CategoryFilter): void {
    this.activeCategory.set(cat);
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
