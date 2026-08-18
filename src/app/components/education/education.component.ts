import { Component, ChangeDetectionStrategy } from '@angular/core';
import { QUALIFICATIONS } from '../../data/portfolio.data';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  readonly qualifications = QUALIFICATIONS;
}
