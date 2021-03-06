import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HikeModule } from "./hike/hike.module";
import { HikeListComponent } from "./hike/hike-list.component";
import { HomeModule }  from './home/home.module';
import { HomeComponent }  from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HikeDetailsComponent } from "./hike/hike-details.component";
import { ContactModule } from './contact/contact.module';
import { ContactUsComponent } from './contact/contact-us.component';

@NgModule({
  imports:      [ BrowserModule,
                  BrowserAnimationsModule,
                  HikeModule,
                  HttpModule,
                  HomeModule,
                  ContactModule,
                  RouterModule.forRoot([
                    { path: 'home', component: HomeComponent },
                    { path: 'hikes', component: HikeListComponent },
                    { path: 'hikes/:id', component: HikeDetailsComponent },
                    { path: 'contact', component: ContactUsComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full'},
                    { path: '**', component: PageNotFoundComponent }
                  ]) ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
