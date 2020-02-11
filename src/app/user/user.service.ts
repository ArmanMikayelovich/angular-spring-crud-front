import {Injectable} from '@angular/core';
import {User} from '../User';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://ng-sb-back-end.herokuapp.com/api/user/';

  constructor(private httpClient: HttpClient) {
  }

  getUser(userId: bigint): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${userId}`);
  }

  deleteById(userId: any): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${userId}`);
  }

  getUserList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  updateUser(id: bigint, user: User): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}`, user);
  }

  createUser(user: User): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, user);
  }


}
