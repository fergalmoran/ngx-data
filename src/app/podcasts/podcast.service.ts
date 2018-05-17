import { Injectable } from '@angular/core';
import { EntityServiceBase, EntityServiceFactory } from 'ngrx-data';
import { Podcast } from '../core';

@Injectable()
export class PodcastService extends EntityServiceBase<Podcast> {
  constructor(entityServiceFactory: EntityServiceFactory) {
    super('Podcast', entityServiceFactory);
  }
}
