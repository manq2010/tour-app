import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesterService } from './services/test.service';
import { ApisService } from './services/apis.service';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './auth/home/home.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { AddUserComponent } from './pages/dashboard/users/add-user/add-user.component';
import { EditUserComponent } from './pages/dashboard/users/edit-user/edit-user.component';
import { ToursComponent } from './pages/tours/tours.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { StudentsComponent } from './pages/students/students.component';
import { StudentFormComponent } from './pages/students/student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { customInterceptor } from './services/custom.interceptor';
import { MatInputModule } from '@angular/material/input';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideToastr } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    PublicLayoutComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    DashboardComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    ToursComponent,
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AsyncPipe,
    JsonPipe,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    MatInputModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: customInterceptor,
      multi: true,
    },
    TesterService,
    ApisService,
    AuthService,
    DataService,
    // provideToastr()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
