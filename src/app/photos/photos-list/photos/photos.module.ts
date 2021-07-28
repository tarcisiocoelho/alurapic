
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class PhotosModule{

}