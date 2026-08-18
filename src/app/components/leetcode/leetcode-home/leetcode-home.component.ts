import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LeetcodeHeaderComponent } from '../leetcode-header/leetcode-header.component';

@Component({
  selector: 'app-leetcode-home',
  standalone: true,
  imports: [LeetcodeHeaderComponent],
  templateUrl: './leetcode-home.component.html',
  styleUrl: './leetcode-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeetcodeHomeComponent {
  private readonly router = inject(Router);

  backToHome(): void {
    this.router.navigateByUrl('/');
  }
}
