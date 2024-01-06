import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../../services/apis.service';
import { Observable } from 'rxjs';
import { Student } from '../../models/student.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements
 OnInit{

  students!:Observable<Student[]>
  students$!:Observable<Student[]>
  constructor(
    private router: Router,
    public apiService: ApisService
    ) {}
  ngOnInit(): void {
    this.apiService.getStudents()
    .subscribe(
      {
        next:(response)=> {
          console.log("students", response)
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )

    this.students$=this.apiService.getStudents();

    console.log("this.students", this.students)
    console.log("this.students$", this.students$)
  }

  navigateto(page: string) {
    this.router.navigate([page]);
  }
}
