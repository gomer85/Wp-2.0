import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {League} from '../models/league';

@Injectable({
  providedIn: 'root'
})

export class AddLeagueBySportIdService {

  constructor(private http: HttpClient) {}

  addLeagueBySportId(league: League) {


  }
}
