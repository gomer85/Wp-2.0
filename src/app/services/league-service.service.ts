import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { League } from "../models/league";
import { Sport } from "../models/sport";

@Injectable({
  providedIn: 'root'
})

export class LeagueServiceService {

  constructor(private http: HttpClient) {
  }

  getLeaguesBySport(sport: Sport): void {
    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/league/sport/';

    const body = new HttpParams()
      .set("name", sport.name);

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
