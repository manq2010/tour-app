import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    
  }

  navigateto(page: string) {
    this.router.navigate([page]);
  }
}
