import { Injectable, Injector } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor {

  constructor(private injector: Injector, private authService: AuthService) { }

  intercept(req: any, next: any) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      }
    });
    return next.handle(tokenizedReq)
  }

}
