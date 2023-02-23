import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LukeSkywalkerComponent } from './luke-skywalker/luke-skywalker.component';
import { LeiaComponent } from './leia/leia.component';

@NgModule({
  declarations: [
    AppComponent,
    LukeSkywalkerComponent,
    LeiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
