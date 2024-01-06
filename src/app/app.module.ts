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
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

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
    ToursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AsyncPipe
  ],
  providers: [
    TesterService,
    ApisService,
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
