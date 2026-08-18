import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leetcode-header',
  standalone: true,
  templateUrl: './leetcode-header.component.html',
  styleUrl: './leetcode-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeetcodeHeaderComponent {
  private readonly router = inject(Router);

  goHome(): void {
    this.router.navigateByUrl('/');
  }
}
