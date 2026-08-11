import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { PROJECTS, ProjectCategory } from '../../data/portfolio.data';

type FilterOption = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly projects = PROJECTS;

  readonly filters: { id: FilterOption; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'fullstack', label: 'Enterprise & Full Stack' },
    { id: 'frontend', label: 'Frontend Applications' },
  ];

  readonly activeFilter = signal<FilterOption>('all');

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === filter);
  });

  setFilter(filter: FilterOption): void {
    this.activeFilter.set(filter);
  }
}
