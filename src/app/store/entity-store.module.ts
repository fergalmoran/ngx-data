import { NgModule } from '@angular/core';
import { EntityMetadataMap, NgrxDataModule } from 'ngrx-data';
import { NgrxDataToastService } from './ngrx-data-toast.service';

export const entityMetadata: EntityMetadataMap = {
  Hero: {},
  Villain: {},
  Podcast: {}
};

// because the plural of "hero" is not "heros"
export const pluralNames = { Hero: 'Heroes' };

@NgModule({
  imports: [
    NgrxDataModule.forRoot({
      entityMetadata: entityMetadata,
      pluralNames: pluralNames
    })
  ],
  providers: [NgrxDataToastService]
})
export class EntityStoreModule {}
