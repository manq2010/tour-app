import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from '../../pages/students/students.component';
import { StudentFormComponent } from '../../pages/students/student-form/student-form.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent},
  { path: 'students/:id', component: StudentFormComponent},
  { path: 'student/form', component: StudentFormComponent},

  // { path: 'applications', component: ApplicationsComponent },
  // { path: 'nominations', component: NominationsComponent },
  // { path: 'candidateList', component: CandidateListComponent },
  // { path: 'finalList', component: FinalListComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicLayoutRoutingModule { }
