import { Component } from '@angular/core';

@Component({
  selector: 'app-loadingspinner',
  templateUrl: './loadingspinner.component.html',
  styleUrl: './loadingspinner.component.css'
})
export class LoadingspinnerComponent {
  isloaded = true;
  ngOnInit() {
    setTimeout(() => {
      this.isloaded = false;
    }, 1000);
    
  }
}
