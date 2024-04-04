import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newUserType } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

    saveUser(user: newUserType){
      return this.httpClient.post('http://localhost:3000/auth/add', user)
    }
}
