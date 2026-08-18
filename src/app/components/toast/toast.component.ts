import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    @if (toastService.toasts().length > 0) {
      <div class="fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 flex-col gap-2 pointer-events-none">
        @for (toast of toastService.toasts(); track toast.id) {
          <div
            class="pointer-events-auto flex items-center gap-3 rounded-2xl border px-5 py-3 shadow-2xl backdrop-blur-xl transition-all duration-300 animate-fade-up border-emerald-500/30 bg-slate-900/90 text-white">
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span class="text-xs font-semibold tracking-wide">{{ toast.message }}</span>
            <button
              type="button"
              (click)="toastService.dismiss(toast.id)"
              class="ml-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Dismiss toast">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        }
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  readonly toastService = inject(ToastService);
}
