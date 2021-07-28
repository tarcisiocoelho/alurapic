import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photos-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

import { NgModule } from '@angular/core';




@NgModule({
  imports:
  [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
  ],
})

export class PhotosModule {}