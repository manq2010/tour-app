import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  // loginObj: any = {
  //   "username": "",
  //   "email": ""
  // }

  loginForm!:FormGroup;
  loginFormSubcription!: Subscription;

  submitted: boolean = false;


  constructor(
    private router: Router,
    public authAPI: AuthService,
    private fb:FormBuilder,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {


    this.loginForm = this.fb.group({
      username:['', Validators.email],
      password:['', Validators.required],
    })
    
  }

  ngOnDestroy(): void {
    if(this.loginFormSubcription) {
      this.loginFormSubcription.unsubscribe();
    }
  }

  onLogin(){
    console.log(this.loginForm)

    this.submitted = true;

    // Object.keys(this.loginForm.controls).forEach((controlName) => {
    //   const control = this.loginForm.get(controlName);
    //   if (control!.status) {
    //     console.log(`Control ${controlName} has errors:`, control!.status);
    //   }
    // });

    if(this.loginForm.valid){
      this.loginFormSubcription = this.authAPI.login(this.loginForm.value).subscribe({
        next:(response) => {
          console.log(response)
          this.showLoginSuccess()
          this.navigateto('/home');
        },
        error:(err) => {
          console.log(err)
        },
      })
    } else {
      this.showInvalidSuccess()    
    }
  }

  showLoginSuccess() {
    this.toastr.success('Successfully logged in');
  }

  showInvalidSuccess() {
    this.toastr.error("Form has errors")
  }

  navigateto(page: string) {
    this.router.navigate([page]);
  }
}
