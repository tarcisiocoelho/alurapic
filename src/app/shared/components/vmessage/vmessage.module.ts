import { CommonModule } from '@angular/common';
import { VMessageComponent } from './vmessage.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [VMessageComponent],
  exports: [VMessageComponent],
  imports: [CommonModule]
})
export class VMessageModule{

}