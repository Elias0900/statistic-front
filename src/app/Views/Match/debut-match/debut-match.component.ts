import {Component, OnInit} from '@angular/core';
import {MatchControllerService} from "../../../services/services/match-controller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatchDto} from "../../../services/models/match-dto";
import {JoueurControllerService} from "../../../services/services/joueur-controller.service";
import {EquipeControllerService} from "../../../services/services/equipe-controller.service";
import {JoueurDto} from "../../../services/models/joueur-dto";

@Component({
  selector: 'app-debut-match',
  templateUrl: './debut-match.component.html',
  styleUrls: ['debut-match.css']
})
export class DebutMatchComponent implements OnInit{

  match: MatchDto = {}
  joueurs: Array<JoueurDto> = []

  joueur: JoueurDto = {}
  error! : string
  matchId = this.activeRoute.snapshot.params["id"]
  constructor(private mService: MatchControllerService,
              private route: Router,
              private jService: JoueurControllerService,
              private eService: EquipeControllerService,
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

  findJoueurParteam() {
  }

}
