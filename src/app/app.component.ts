import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Touring';

  constructor(private router: Router, public spinnerService: SpinnerService) {}
}
