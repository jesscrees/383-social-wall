import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeDatePipe } from './relative-date.pipe';



@NgModule({
  declarations: [
    RelativeDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RelativeDatePipe
  ],
  providers: [
    RelativeDatePipe
  ]
})
export class PipesModule { }
