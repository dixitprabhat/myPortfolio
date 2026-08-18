import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PORTFOLIO } from '../../data/portfolio.data';
import { PLATFORM_ID } from '@angular/core';

export interface GithubUserData {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  avatar_url: string;
  html_url: string;
  bio: string;
}

@Component({
  selector: 'app-github-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-stats.component.html',
  styleUrl: './github-stats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubStatsComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  readonly portfolio = PORTFOLIO;
  readonly githubUser = signal<GithubUserData | null>(null);
  readonly isLoading = signal(true);
  readonly hasError = signal(false);

  // Fallback default stats if GitHub API rate limit is reached
  readonly defaultStats = {
    public_repos: 12,
    followers: 15,
    following: 20,
    created_at: '2022-01-01T00:00:00Z',
    avatar_url: 'assets/images/homePP.jpeg',
    html_url: PORTFOLIO.github,
    bio: 'MEAN Stack Developer building enterprise web applications & REST APIs.',
  };

  readonly topLanguages = [
    { name: 'TypeScript', percent: 45, color: 'bg-blue-500' },
    { name: 'JavaScript', percent: 30, color: 'bg-yellow-400' },
    { name: 'HTML / CSS', percent: 15, color: 'bg-orange-500' },
    { name: 'MongoDB / JSON', percent: 10, color: 'bg-emerald-500' },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.fetchGithubProfile();
    } else {
      this.isLoading.set(false);
    }
  }

  fetchGithubProfile(): void {
    const url = `https://api.github.com/users/theprabhuofficial`;
    this.http.get<GithubUserData>(url).subscribe({
      next: (data) => {
        this.githubUser.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        // Fallback to default metrics
        this.githubUser.set(this.defaultStats);
        this.hasError.set(true);
        this.isLoading.set(false);
      },
    });
  }
}
