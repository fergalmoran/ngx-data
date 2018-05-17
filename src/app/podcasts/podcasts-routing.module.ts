import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastsComponent } from './podcasts/podcasts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PodcastsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastsRoutingModule {}
