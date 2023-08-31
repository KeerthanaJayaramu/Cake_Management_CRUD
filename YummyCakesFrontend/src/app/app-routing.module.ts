import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CreateCakeComponent } from './create-cake/create-cake.component';
import { UpdateCakeComponent } from './update-cake/update-cake.component';
import { CakeDetailsComponent } from './cake-details/cake-details.component';

const routes: Routes = [
  {path: 'cake', component: CakeListComponent},
  {path: 'create-cake', component: CreateCakeComponent},
  {path: '', redirectTo: 'cake', pathMatch: 'full'},
  {path: 'update-cake/:id', component: UpdateCakeComponent},
  {path: 'cake-details/:id', component: CakeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
