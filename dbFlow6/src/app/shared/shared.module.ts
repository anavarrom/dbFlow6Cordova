// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
// Custom Components
import {ErrorDetailComponent} from './error-detail/error-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorDetailComponent],
  entryComponents: [
    ErrorDetailComponent
  ],
})
export class SharedModule { }
