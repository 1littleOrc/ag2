import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimeModuleComponent } from './time-module/time-module.component';
import { CountdownModuleComponent } from './countdown-module/countdown-module.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeModuleComponent,
    CountdownModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
