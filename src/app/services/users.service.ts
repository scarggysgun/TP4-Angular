import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpUsersListResponse } from '../types/users.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public perPage = 6;
  private apiLink: string = environment.apiLink;

  constructor(private http: HttpClient) {}

  getUsersList(page: number): Observable<HttpUsersListResponse> {
    return this.http.get(
      `${environment.apiLink}/users?page=${page}&per_page=${this.perPage}`
    ) as Observable<HttpUsersListResponse>;
  }
}
