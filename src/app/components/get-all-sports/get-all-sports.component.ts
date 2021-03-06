import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Sport } from "../../models/sport";
import { GetAllSports } from "../../services/getAllSports"

@Component({
  selector: 'app-get-all-sports',
  templateUrl: './get-all-sports.component.html',
  styleUrls: ['./get-all-sports.component.css']
})
export class GetAllSportsComponent implements OnInit {
  sport: Sport = {
    id: 0,
    name: "",
//    leagues: []
  };

  data: any = {};

  //sportArr : sport[] = [];

  constructor(private route: ActivatedRoute, private getAllSports: GetAllSports) {}

  ngOnInit() {
      this.getAllSports.getSports().subscribe(data => {
        console.log(data);
        this.data = data;
      })
  }
}
