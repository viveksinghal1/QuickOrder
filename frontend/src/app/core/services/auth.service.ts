import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private _router: Router) { }

  register(user: any) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<any>(environment.api_url+"/register", user, {headers})
      .pipe(catchError(this.errorHandler));
  }

  loginUser(user: any) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<any>(environment.api_url+"/login", user, {headers})
      .pipe(catchError(this.errorHandler));

  }

  isLoggedIn() {
    return !!this.getToken();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
