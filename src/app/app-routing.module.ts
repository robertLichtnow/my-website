import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'bio', component:BioComponent},
  {path: 'skills', component:SkillsComponent},
  {path: '**', redirectTo:'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
