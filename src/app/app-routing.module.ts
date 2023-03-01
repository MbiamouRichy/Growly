import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {PlanComponent} from "./plan/plan.component";
import {AboutComponent} from "./about/about.component";
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: ContactComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
