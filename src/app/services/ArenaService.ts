import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Arena} from '../models/arena';

@Injectable({
  providedIn: 'root'
})

export class ArenaService {

  constructor(private http: HttpClient) {}

  addArena(arena: Arena) {

    let apiUrl = 'http://gruppmalin.jls-sto1.elastx.net/api/arena/add?';

    const body = new HttpParams()
    .set("name", arena.name);
    //insert correct adress here.

  }
}
