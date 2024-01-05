import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'users', component: UsersComponent },
  // { path: 'candidates', component: CandidatesComponent },
  // { path: 'candidateDetail', component: CandidateDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutingModule { }
