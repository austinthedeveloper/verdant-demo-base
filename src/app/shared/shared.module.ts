import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {SHARED_COMPONENTS} from './components';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [...SHARED_COMPONENTS ],
  bootstrap:    [  ],
  exports: [...SHARED_COMPONENTS]
})
export class SharedModule { }
