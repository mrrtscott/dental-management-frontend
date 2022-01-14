import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomHttpResponse } from '../common/custom-http-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[] | HttpErrorResponse>{
    return this.httpClient.get<User[]>(`${this.host}/user/list`)
  }

  public addUser(formData: FormData): Observable<User | HttpErrorResponse>{
    return this.httpClient.post<User>(`${this.host}/user/add`, formData)
  }

  public updateUser(formData: FormData): Observable<User | HttpErrorResponse>{
    return this.httpClient.post<User>(`${this.host}/user/update`, formData)
  }

  public resetPassword(email: string): Observable<CustomHttpResponse | HttpErrorResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${this.host}/user/resetPassword/${email}`)
  }

  public updateProfileImage(formData: FormData): Observable<HttpEvent<User> | HttpErrorResponse>{
    return this.httpClient.post<User>(`${this.host}/user/update`, formData, {reportProgress: true, observe: 'events'})
  }

  public deleteUser(username: string): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${this.host}/user/delete/${username}`)
  }

  public addUsersToLocalCache(users: User[]): void{
    localStorage.setItem('users', JSON.stringify(users))
  }

  public getUsersFromLocalCache(): User[]{
    if(localStorage.getItem('users')){
      return JSON.parse(localStorage.getItem('users'));
    }
    return null;
  }

  public createUserFormData(loggedInUsername: string, user: User, profileImage: File): FormData{
    const formData = new FormData();
    formData.append('currentUsername', loggedInUsername);
    formData.append('firstName', user.firstName);
    formData.append('middleName', user.middleName);
    formData.append('lastName', user.lastName);
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('role', user.roles);
    formData.append('profileImage', profileImage);
    formData.append('isActive', JSON.stringify(user.isActive));
    formData.append('isNonLocked', JSON.stringify(user.isNotLocked));
    

    return formData;


  }


}
