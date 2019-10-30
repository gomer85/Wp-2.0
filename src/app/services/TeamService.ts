import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Team } from "../models/team";

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  constructor(private http: HttpClient) {
  }

  getTeamById(id: number) {
    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/team/';
    return this.http.get(apiUrl + id);
  }

  getTeamsBySport(id: number) {
    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/team/sport/';
    return this.http.get(apiUrl + id);
  }

  getTeamsBySeason(id: number) {
    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/team/season/';
    return this.http.get(apiUrl + id);
  }

  addTeam(team: Team): void {

    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/team/add/';

    this.http.post(apiUrl + team.sportId + "/" + team.name);
  }

}
