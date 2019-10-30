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

  addTeam(team: Team): void {

    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/team/add?';

    const body = new HttpParams()
      .set("id", team.sportId + "")
      .set("name", team.name);

    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http.post(apiUrl, body.toString(), options)
      .subscribe(
        res => { console.log("POST Request was successful: " + res) },
        err => { console.log("Error occurred: " + err.toString) });
  }

}
