import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../../../services/apis.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent implements OnInit, OnDestroy{

  form!:FormGroup;
  studentformSubcription!: Subscription;
  paramsSubcription!: Subscription;

  isEdit = false;
  id=0;

  constructor(
    private router: Router,
    public apiService: ApisService,
    private fb:FormBuilder,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService

  ){}

  ngOnInit(): void {

    this.paramsSubcription = this.activatedRouter.params.subscribe({
      next:(response)=> {

        let id = response['id'];
        this.id = id;
        if(!id) return;

        this.apiService.getStudent(id).subscribe({
          next:(response) => {
            console.log(response)
            this.form.patchValue(response.detailDescription)
            this.isEdit = true;
          },
          error:(err) => {
            console.log(err)
          },
        })
      },
      error:(err) => {
        console.log(err)
      }
    })

    this.form = this.fb.group({
      name:['', Validators.required],
      address:['', Validators.required],
      phoneNumber:['', Validators.required],
      email:['', Validators.email]
    })
  }

  ngOnDestroy(): void {
    if(this.studentformSubcription) {
      this.studentformSubcription.unsubscribe();
    }

    if(this.paramsSubcription) {
      this.paramsSubcription.unsubscribe();
    }
  }

  onSubmit(){
    // console.log(this.form.value)

    if(!this.isEdit){
      // Adding a new student
      this.studentformSubcription =  this.apiService.addStudent(this.form.value).subscribe({
        next:(response) => {
          console.log(response)
          this.showSuccess();
          this.navigateto('/public/students');
        },
        error:(err) => {
          console.log(err)
        },
      })
    } else {
      // Editing an existing student
      this.apiService.editStudent(this.id, this.form.value).subscribe({
        next:(response) => {
          console.log(response)
          this.showEditSuccess()
          this.navigateto('/public/students');
        },
        error:(err) => {
          console.log(err)
        },
      })
    }

  }

  showSuccess() {
    this.toastr.success('Student successfully added');
  }

  showEditSuccess() {
    this.toastr.success('Student successfully edited');
  }

  showInvalidSuccess() {
    this.toastr.error("Form has errors")
  }

  navigateto(page: string) {
    // this.router.navigate([page]);
    this.router.navigateByUrl(page);
  }

}
