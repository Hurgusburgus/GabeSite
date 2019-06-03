import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutGabeComponent } from './about-gabe/about-gabe.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'about-gabe', component : AboutGabeComponent},
  { path : 'about-site', component : AboutSiteComponent},
  { path : 'resume', component : ResumeComponent},
  { path : '', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
