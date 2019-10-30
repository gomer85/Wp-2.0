import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  addLeague(league: League): Observable<League>{

    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/league/add/';

    return this.http.post<League>(apiUrl + league.sportId + "/" + league.name, JSON.stringify(league));
  }

}
