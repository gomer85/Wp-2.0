import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommandListComponent } from './command-list/command-list.component';
import { AddSportComponent } from './components/add-sport/add-sport.component';
import { GetLeagueBySportComponent } from './components/get-league-by-sport/get-league-by-sport.component';
import { GetLeagueByIdComponent } from './components/get-league-by-id/get-league-by-id.component';
import { GetAllSportsComponent } from './components/get-all-sports/get-all-sports.component';
import {AddNewArenaComponent} from './components/add-new-arena/add-new-arena.component';
import { AddLeagueBysportidComponent } from './components/add-league-bysportid/add-league-bysportid.component';
import { GetTeamByIdComponent } from './components/get-team-by-id/get-team-by-id.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { GetTeamBySportComponent } from './components/get-team-by-sport/get-team-by-sport.component';
import { GetTeamBySeasonComponent } from './components/get-team-by-season/get-team-by-season.component';
import { AddLeagueComponent } from './components/add-league/add-league.component';



@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CommandListComponent },
      { path: 'GetAllSports', component: GetAllSportsComponent },
      { path: 'AddSport', component: AddSportComponent },
      { path: 'GetLeagueById', component: GetLeagueByIdComponent },
      { path: 'GetLeagueBySport', component: GetLeagueBySportComponent },
      { path: 'AddLeague', component: AddLeagueComponent },
      { path: 'GetTeamById', component: GetTeamByIdComponent },
      { path: 'GetTeamBySport', component: GetTeamBySportComponent },
      { path: 'GetTeamBySeason', component: GetTeamBySeasonComponent },
      { path: 'AddTeam', component: AddTeamComponent },
      { path: 'AddArena', component: AddNewArenaComponent },
    ])
  ],
  declarations: [

    AppComponent,
    TopBarComponent,
    CommandListComponent,
    AddSportComponent,
    GetLeagueBySportComponent,
    GetLeagueByIdComponent,
    GetAllSportsComponent,
    AddNewArenaComponent,
    AddLeagueBysportidComponent,
    GetTeamByIdComponent,
    AddTeamComponent,
    GetTeamBySportComponent,
    GetTeamBySeasonComponent,
    AddLeagueComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
