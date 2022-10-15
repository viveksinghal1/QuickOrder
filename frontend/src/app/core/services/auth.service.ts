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

  validateUsername(username: any): Observable<any> {
    return this.http.get<any>(environment.api_url+"/users/checkusername/?username="+username)
    .pipe(catchError(this.errorHandler));
  }

  validateEmail(email: any): Observable<any> {
    return this.http.get<any>(environment.api_url+"/users/checkemail/?email="+email)
    .pipe(catchError(this.errorHandler));
  }

  isLoggedIn() {
    return !!this.getToken()  && !!this.getUsername();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this._router.navigate(['/login']);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}