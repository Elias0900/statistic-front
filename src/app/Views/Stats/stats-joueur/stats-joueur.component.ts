import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurDto, MatchDto, TotalDto } from 'src/app/services/models';
import { JoueurControllerService, MatchControllerService, TotalControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-stats-joueur',
  templateUrl: './stats-joueur.component.html',
  styleUrls: ['stats-joueur.css']
})
export class StatsJoueurComponent implements OnInit{
  
  joueur: JoueurDto = {}
  currentJoueurId = this.route.snapshot.params["jid"]
  currentMatchId = this.route.snapshot.params["mid"]

  total : TotalDto = {}
  match: MatchDto = {}


  constructor(
    private jService: JoueurControllerService,
    private mService: MatchControllerService,
    private tService: TotalControllerService,
    private route: ActivatedRoute, 
    private router: Router
  ){}

  ngOnInit(): void {
    this.refreshPourcentage()
    this.getMatch()
    this.getJoueur()
    this.getTotalByJoueur()
    
  }

  getTotalByJoueur(){
    this.tService.total({id: this.currentJoueurId, matchId: this.currentMatchId}).subscribe({
      next: value =>{
        this.total = value
      }
    })
  }

  getMatch(){
    this.mService.findById1({id: this.currentMatchId}).subscribe({
      next: value =>{
        this.match = value
      }
    })
  }

  getJoueur(){
    this.jService.findById2({id: this.currentJoueurId}).subscribe({
      next: value =>{
        this.joueur = value
      }
    })
  }

  refreshPourcentage(){
    this.tService.pourcentage({id: this.currentJoueurId, matchId: this.currentMatchId}).subscribe({
      next: value => {
        this.total.pourcentage = value
      }
    })
  }

}
