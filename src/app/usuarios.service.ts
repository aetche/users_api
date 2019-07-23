import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url:string = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) {
   }

   getUsersByPage(page): Observable<Users> {
      return this.httpClient.get<Users>(`${this.url}/?page=${page}`);
   }
}
