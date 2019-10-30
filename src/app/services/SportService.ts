import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Sport } from "../models/sport";

@Injectable({
  providedIn: "root"
})

export class SportService {
  constructor(private http: HttpClient) {
  }

  getSports() {
    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/sport/all';
    return this.http.get(apiUrl);
  }

  addSport(sport: Sport): void {

    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/sport/add?';

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
