import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../../services/apis.service';
import { Student } from '../../models/student.module';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit{

  students$!:Observable<Student[]>

  constructor(
    private router: Router,
    public apiService: ApisService,
    private toastr: ToastrService
    ) {}
  ngOnInit(): void {
    this.getAllStudents();

  }

  delete(id: number){
   this.apiService.deleteStudent(id).subscribe({
    next:(response) => {
      console.log(response)
      this.showSuccess()
      this.getAllStudents();
    },
    error:(err) => {
      console.log(err)
    },
   })
  }

  getAllStudents(){
    this.students$ = this.apiService.getStudents();
    console.log("this.students$",  this.students$ )
  }

  showSuccess() {
    this.toastr.success('Student successfully deleted');
  }

  navigateto(page: string) {
    this.router.navigate([page]);
  }
}
