import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { sport } from "../models/sport";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GetSportId {

private apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/sport/'

  constructor(private http: HttpClient) {
  }

  getSportId() {
    return this.http.get(this.apiUrl);
  }
}
