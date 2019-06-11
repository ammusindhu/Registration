import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from 'src/app/result/result.component';
import { RegisterComponent } from 'src/app/register/register.component';

const routes: Routes = [
  { path: '', component: ResultComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
