import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommandListComponent } from './command-list/command-list.component';
import { GetAllSportsComponent } from './components/get-all-sports/get-all-sports.component';
import {AddNewArenaComponent} from './components/add-new-arena/add-new-arena.component';
import { AddLeagueBysportidComponent } from './components/add-league-bysportid/add-league-bysportid.component';
import { GetLeagueBysportidComponent } from './components/get-league-bysportid/get-league-bysportid.component';
import { AddSportComponent } from './components/add-sport/add-sport.component';




@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CommandListComponent },
      { path: 'add-league-bysportid', component: AddLeagueBysportidComponent },
      { path: 'get-league-bysportid', component: GetLeagueBysportidComponent },
      { path: 'add-sport', component: AddSportComponent },

    ])
  ],
  declarations: [

    AppComponent,
    TopBarComponent,
    CommandListComponent,
    GetAllSportsComponent,
    AddNewArenaComponent,
    AddLeagueBysportidComponent,
    GetLeagueBysportidComponent,
    AddSportComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
