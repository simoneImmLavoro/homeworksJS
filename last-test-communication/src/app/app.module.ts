import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DaQuiComponent } from './da-qui/da-qui.component';
import { AQuaComponent } from './a-qua/a-qua.component';

@NgModule({
  declarations: [
    AppComponent,
    DaQuiComponent,
    AQuaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
