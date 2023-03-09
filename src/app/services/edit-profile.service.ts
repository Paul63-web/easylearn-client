import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  public userBaseUrl = environment.userBaseUrl

  constructor(
    private _http: HttpClient
  ) { }

  uploadProfilePix(data: any) {
    return this._http.post(`${this.userBaseUrl}upload-profile-picture`, data)
  }
}
