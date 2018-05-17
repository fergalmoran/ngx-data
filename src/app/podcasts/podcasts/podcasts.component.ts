import { Component, OnInit } from '@angular/core';
import { MasterDetailCommands, Podcast } from '../../core';
import { Observable } from 'rxjs/Observable';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent
  implements MasterDetailCommands<Podcast>, OnInit {
  selected: Podcast;
  commands = this;

  podcasts$: Observable<Podcast[]>;
  loading$: Observable<boolean>;

  constructor(private podcastService: PodcastService) {
    this.podcasts$ = podcastService.entities$;
    this.loading$ = podcastService.loading$;
  }

  ngOnInit() {
    this.getPodcasts();
  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getPodcasts() {
    this.podcastService.getAll();
    this.close();
  }

  add(podcast: Podcast) {
    this.podcastService.add(podcast);
  }

  delete(podcast: Podcast) {
    this.podcastService.delete(podcast.id);
    this.close();
  }

  update(podcast: Podcast) {
    this.podcastService.update(podcast);
  }

  select(podcast: Podcast) {
    this.selected = podcast;
  }

  unselect() {
    this.selected = null;
  }
}
