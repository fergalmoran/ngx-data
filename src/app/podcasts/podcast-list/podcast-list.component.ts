import { Component, OnInit, Input } from '@angular/core';
import { Podcast, MasterDetailCommands } from '../../core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent {
  @Input() podcasts: Podcast[];
  @Input() selectedPodcast: Podcast;
  @Input() commands: MasterDetailCommands<Podcast>;

  byId(podcast: Podcast) {
    return podcast.id;
  }

  onSelect(podcast: Podcast) {
    this.commands.select(podcast);
  }

  deletePodcast(podcast: Podcast) {
    this.commands.delete(podcast);
  }
}
