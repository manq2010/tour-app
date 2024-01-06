import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment';
import { Student } from '../models/student.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }

  // getStudents(){
  //   return this.http.get<any>(
  //     environment.serverAPI + 'Students'
  //   )
  // }

  getStudents=():Observable<Student[]>=> this.http.get<Student[]>(environment.serverAPI + 'Students')


}
