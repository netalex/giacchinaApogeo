import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';



import { AppComponent } from './app.component';
import { AppComponent2Component } from './app-component2/app-component2.component';
import { DateExampleComponent } from './date-example/date-example.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { AsyncComponent } from './async/async.component';
import { SliceComponent } from './slice/slice.component';
import { JsonComponent } from './json/json.component';
import { CustomComponent } from './custom/custom.component';
import { HelloPipe } from './custom/custom.component';
import { DirStructComponent } from './dir-struct/dir-struct.component';
import { HelloDirectiveDirective } from './hello-directive.directive';
import { NameUserComponent } from './name-user/name-user.component';
import { ChildNameUser } from "./name-user/name-user.component";

@NgModule({
  declarations: [
    AppComponent,
    AppComponent2Component,
    DateExampleComponent,
    PipeExampleComponent,
    AsyncComponent,
    SliceComponent,
    JsonComponent,
    CustomComponent,
    HelloPipe,
    DirStructComponent,
    HelloDirectiveDirective,
    NameUserComponent,
    ChildNameUser
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// https://stackoverflow.com/questions/40994719/cannot-find-name-jquery-in-angular2
