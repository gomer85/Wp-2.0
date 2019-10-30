import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { apicommands } from '../apicommands';
import { Sport } from "../models/sport";
import { getAllSports } from "../services/getAllSports"

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  sport: Sport = {
    id: 0,
    name: "",
//    leagues: []
  };

  data: any = {};

  //sportArr : sport[] = [];

  constructor(private route: ActivatedRoute, private getAllSports: getAllSports) {}

  ngOnInit() {
      this.getAllSports.getSports().subscribe(data => {
        console.log(data);
        this.data = data;
      })
  }
}
