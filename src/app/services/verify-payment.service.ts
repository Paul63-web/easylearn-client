import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VerifyPaymentService {
  public baseUrl = environment.baseUrl

  public userBaseUrl = environment.userBaseUrl

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  verifyPayment(data: any) {
    return this._http.post<any>(`${this.userBaseUrl}verify-payment`, data);
  }
}
