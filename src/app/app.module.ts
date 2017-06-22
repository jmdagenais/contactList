import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import { ContactFormComponent } from './contact-form/contact-form.component';
import {appRoutes} from "./app.routes";
import {BackandService} from '@backand/angular2-sdk';
import {ContactServcice} from './shared/contact.service';
import { ContactItemComponent } from './contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContactListComponent,
    ContactFormComponent,
    ContactItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    BackandService,
    ContactServcice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
