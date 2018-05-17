import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Define the paths to the lazily loaded modules
const lazyPaths = {
  heroes: 'app/heroes/heroes.module#HeroesModule',
  villains: 'app/villains/villains.module#VillainsModule',
  podcasts: 'app/podcasts/podcasts.module#PodcastsModule'
};

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'podcasts' },
  { path: 'heroes', loadChildren: lazyPaths.heroes },
  { path: 'villains', loadChildren: lazyPaths.villains },
  { path: 'podcasts', loadChildren: lazyPaths.podcasts }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
