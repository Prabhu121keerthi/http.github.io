import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

   myHeaders = new HttpHeaders({'myheader': ['headervalue', 'headervalue2']});

  myHeader = this.myHeaders.set('id', '1234');

  headerVal = this.myHeader.append('id', '0000');

  myParams = new HttpParams().set('page', '5').set('sort', 'true');

  myParam = this.myParams.append('name', 'john');

  constructor(private http: HttpClient) { }

  getUsers():Observable<HttpEvent<User[]>> {
    //return this.http.get<User[]>(`${this.apiUrl}/users`, {headers: this.headerVal});
    //return this.http.get<User[]>(`${this.apiUrl}/users`, {params: this.myParam});
    return this.http.get<User[]>(`${this.apiUrl}/users`, {observe: 'events'});
  }

  getUser():Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`);
  }

  getTextFile():Observable<string> {
    return this.http.get('assets/text.txt', {responseType: 'text'});
  }

  createUser(user:User):Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user );
  }

  updateUser(user:User):Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user );
  }

  patchUser(user:User):Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user );
  }

  deleteUser(id:number):Observable<User> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }
}
