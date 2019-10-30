import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommandListComponent } from './command-list/command-list.component';
import { ResultsComponent } from './results/results.component';
import { AddSportComponent } from './components/add-sport/add-sport.component';
import { GetLeagueBySportComponent } from './components/get-league-by-sport/get-league-by-sport.component';
import { GetLeagueByIdComponent } from './components/get-league-by-id/get-league-by-id.component';
import { GetAllSportsComponent } from './components/get-all-sports/get-all-sports.component';
import {AddNewArenaComponent} from './components/add-new-arena/add-new-arena.component';
import { AddLeagueBysportidComponent } from './components/add-league-bysportid/add-league-bysportid.component';



@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CommandListComponent },
     { path: 'results/:command.name', component: GetLeagueByIdComponent },
    ])
  ],
  declarations: [

    AppComponent,
    TopBarComponent,
    CommandListComponent,
    ResultsComponent,
    AddSportComponent,
    GetLeagueBySportComponent,
    GetLeagueByIdComponent,
    GetAllSportsComponent,
    AddNewArenaComponent,
    AddLeagueBysportidComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
