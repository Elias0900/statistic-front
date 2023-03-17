import {Component, OnInit} from '@angular/core';
import {MatchControllerService} from "../../../services/services/match-controller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatchDto} from "../../../services/models/match-dto";

@Component({
  selector: 'app-debut-match',
  templateUrl: './debut-match.component.html',
  styles: [
  ]
})
export class DebutMatchComponent implements OnInit{

  match: MatchDto = {}
  error! : string
  matchId = this.activeRoute.snapshot.params["id"]
  constructor(private mService: MatchControllerService,
              private route: Router,
              private activeRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.findMatch()
  }

  findMatch(){
    this.mService.findById1({id: this.matchId}).subscribe({
      next: value => {
        console.log(value)
        this.match = value;
      },
      error: err => {
        this.error = err.error.messages
      }
    })
  }

}
