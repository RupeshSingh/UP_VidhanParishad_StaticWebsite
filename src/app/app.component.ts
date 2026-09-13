import { Component } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading = true;

  private navigationStartTime = 0;
  private readonly loaderDuration = 1000;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        this.navigationStartTime = Date.now();
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        const elapsedTime = Date.now() - this.navigationStartTime;
        const remainingTime = Math.max(0, this.loaderDuration - elapsedTime);

        setTimeout(() => {
          this.isLoading = false;
        }, remainingTime);
      }
    });
  }
}
