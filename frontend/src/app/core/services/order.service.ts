import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders() {
    const email = localStorage.getItem("email");
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.get<any>(environment.api_url+"/orders?email="+email, {headers})
      .pipe(catchError(this.errorHandler));
  }

  order(payload: any) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<any>(environment.api_url+"/orders", payload, {headers})
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
