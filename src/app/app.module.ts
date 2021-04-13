import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaninaComponent } from './Planine/Planina/planina.component';
import { PlanineComponent } from './Planine/planine.component';

import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PlaninaComponent,
    PlanineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
