import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Sport } from "../models/Sport";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class getAllSports {

private apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/sport/all'

  constructor(private http: HttpClient) {
  }

  getSports() {
    //insert correct adress here.
    return this.http.get(this.apiUrl);
  }

  addSport(sport: Sport): void {

      let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/sport/add?';

      const body = new HttpParams()
        .set("name", sport.name);

      let options = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      };
}
}
