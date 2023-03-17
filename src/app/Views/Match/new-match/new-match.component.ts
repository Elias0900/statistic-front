import {Component, OnInit} from '@angular/core';
import {EquipeControllerService} from "../../../services/services/equipe-controller.service";
import {EquipeDto} from "../../../services/models/equipe-dto";
import {MatchControllerService} from "../../../services/services/match-controller.service";
import {MatchDto} from "../../../services/models/match-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ["new-match.css"]
})
export class NewMatchComponent implements OnInit{

  equipes: EquipeDto[] = []

  match: MatchDto = {}

  error!: string
  constructor(private eService: EquipeControllerService,
              private mService: MatchControllerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findAllTeam()

  }

  findAllTeam(){
    this.eService.getAll().subscribe({
      next: value => {
        this.equipes = value
      },
      error: err => {
        this.error = err.error.message
      }
    })
  }

  newMatch(){
    this.mService.newMatch({body: this.match}).subscribe({
      next: value => {
        const matchId = value.id
        this.router.navigate(['/match', matchId])
      }
    })
  }

}
