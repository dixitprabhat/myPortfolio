import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCES;
}
