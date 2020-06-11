import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{
  path: '', children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'projects', component: ProjectsComponent
    },
    {
      path: 'timeline', component: TimelineComponent
    },
    {
      path: 'interests', component: InterestsComponent
    },
    {
      path: 'contact', component: ContactComponent
    }
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}