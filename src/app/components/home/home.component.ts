import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { PORTFOLIO } from '../../data/portfolio.data';
import { PopupComponent } from '../popup/popup.component';
import { ToastService } from '../../services/toast.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly viewportScroller = inject(ViewportScroller);
  private readonly toastService = inject(ToastService);
  readonly languageService = inject(LanguageService);
  readonly portfolio = PORTFOLIO;

  readonly stats = [
    { value: '3+', label: 'Years Commercial Exp.', sublabel: 'Enterprise & Full-Stack' },
    { value: '15+', label: 'Core Stack Techs', sublabel: 'Node, Angular, MongoDB, Express' },
    { value: '4+', label: 'Featured Projects', sublabel: 'Enterprise & Web Apps' },
    { value: '100%', label: 'Clean Architecture', sublabel: 'Responsive & Accessible' },
  ];

  readonly recruiterInfo = [
    { icon: '💼', label: 'Primary Role', value: 'MEAN Stack Developer' },
    { icon: '🚀', label: 'Work Mode', value: 'Remote / Hybrid / On-site' },
    { icon: '⏱️', label: 'Notice Period', value: '30 Days / Open' },
    { icon: '📍', label: 'Location', value: 'Delhi NCR, India' },
  ];

  scrollTo(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.portfolio.email).then(() => {
        this.toastService.show(this.languageService.t.emailCopied);
      });
    }
  }
}
