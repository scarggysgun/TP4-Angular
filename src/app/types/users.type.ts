import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpUsersListResponse {
  private apiLink: string = environment.apiLink;

  constructor(private http: HttpClient) {}

  getUsersList(): Observable<any> {
    const url = `${this.apiLink}/users`;
    return this.http.get(url);
  }
}
