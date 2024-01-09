import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { environment } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login=(data: Login)=> this.http.post(environment.serverAPI + 'Authenticate/Login', data);
}
