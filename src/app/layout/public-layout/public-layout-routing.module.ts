import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
