import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { League } from "../models/league";

@Injectable({
  providedIn: 'root'
})

export class LeagueService {

  constructor(private http: HttpClient) {
  }

  getLeaguesBySport(sportId: number) {
    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/league/sport/';
    return this.http.get(apiUrl + sportId);
  }

  getLeagueById(id: number) {
    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/league/';
    return this.http.get(apiUrl + id);
  }

  addLeague(league: League) {

    let apiUrl= 'http://gruppmalin.jls-sto1.elastx.net/api/league/add?';

    let body = new HttpParams()
    .set("name", league.name)
    .set("id", league.sportId + "");
  }
}
