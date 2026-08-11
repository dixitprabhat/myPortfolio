import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { SKILLS, Skill } from '../../data/portfolio.data';

type CategoryFilter = 'all' | 'frontend' | 'backend' | 'database' | 'tools';

@Component({
  selector: 'app-skils',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly skills = SKILLS;
  readonly activeCategory = signal<CategoryFilter>('all');

  readonly categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools & Git' },
  ];

  readonly filteredSkills = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.skills;
    return this.skills.filter((s) => s.category === cat);
  });

  setCategory(cat: CategoryFilter): void {
    this.activeCategory.set(cat);
  }
}
