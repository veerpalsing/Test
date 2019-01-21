import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Middle1Component } from './middle1/middle1.component';
import { Middle2Component } from './middle2/middle2.component';
import { BottomleftComponent } from './bottomleft/bottomleft.component';
import { BottomrightComponent } from './bottomright/bottomright.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Middle1Component,
    Middle2Component,
    BottomleftComponent,
    BottomrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
