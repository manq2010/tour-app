import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment';
import { ResponseStudent, Student } from '../models/student.module';
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

  getStudents=():Observable<Student[]>=> this.http.get<Student[]>(environment.serverAPI + 'Students');

  addStudent=(data: Student)=> this.http.post(environment.serverAPI + 'Students', data);

  getStudent=(id: number):Observable<ResponseStudent>=> this.http.get<ResponseStudent>(environment.serverAPI + 'Students/'+ id);

  deleteStudent=(id: number):Observable<Student> => this.http.delete<Student>(environment.serverAPI + 'Students/'+ id);

  editStudent=(id: number, data: Student):Observable<Student> => this.http.put<Student>(environment.serverAPI + 'Students/'+ id, data);
  
}
