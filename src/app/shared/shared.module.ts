import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlynumberDirective } from './directives/onlynumber.directive';
import { ScrollindicatorDirective } from './directives/scrollindicator.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OnlynumberDirective,
    ScrollindicatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [OnlynumberDirective, ScrollindicatorDirective]
})
export class SharedModule { }
