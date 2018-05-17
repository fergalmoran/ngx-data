import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { PodcastService } from './podcast.service';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';

@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule, PodcastsRoutingModule],
  exports: [PodcastsComponent],
  declarations: [PodcastsComponent, PodcastListComponent, PodcastDetailComponent],
  providers: [PodcastService]
})
export class PodcastsModule {}
