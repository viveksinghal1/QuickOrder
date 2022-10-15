import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  isSignIn: boolean = true;
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions = [];

    this.updateSignInFlag(this.router.url);

    this.subscribeToRouterEvents();
  }

  subscribeToRouterEvents() {
    const sub = this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.updateSignInFlag(res.url);
      }
    });

    this.subscriptions.push(sub);
  }

  updateSignInFlag(url: string) {
    if (url.includes('/login')) {
      this.isSignIn = true;
    } else {
      this.isSignIn = false;
    }
  }

  ngOnDestroy(): void {
      this.subscriptions?.forEach(sub => {
        sub.unsubscribe();
      })
  }

}
