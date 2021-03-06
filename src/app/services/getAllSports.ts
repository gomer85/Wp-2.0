import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GetAllSports {

private apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/sport/all'

  constructor(private http: HttpClient) {
  }

  getSports() {
    //insert correct adress here.
    return this.http.get(this.apiUrl);
  }
}
