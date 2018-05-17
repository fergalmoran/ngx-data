import {
  Component,
  Input,
  ElementRef,
  OnChanges,
  ViewChild,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Podcast, MasterDetailCommands } from '../../core';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PodcastDetailComponent implements OnChanges {
  @Input() podcast: Podcast;
  @Input() commands: MasterDetailCommands<Podcast>;

  @ViewChild('title') titleElement: ElementRef;

  addMode = false;
  form = this.fb.group({
    id: [],
    title: ['', Validators.required],
    slug: ['', Validators.required],
    description: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    this.setFocus();
    if (this.podcast && this.podcast.id) {
      this.form.patchValue(this.podcast);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  close() {
    this.commands.close();
  }

  savePodcast() {
    const { dirty, valid, value } = this.form;
    if (dirty && valid) {
      const newPodcast = { ...this.podcast, ...value };
      this.addMode
        ? this.commands.add(newPodcast)
        : this.commands.update(newPodcast);
    }
    this.close();
  }

  setFocus() {
    this.titleElement.nativeElement.focus();
  }
}
