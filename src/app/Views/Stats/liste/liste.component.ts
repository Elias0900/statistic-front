import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurDto, MatchDto, StatsDto } from 'src/app/services/models';
import { JoueurControllerService } from 'src/app/services/services';
import { MatchControllerService } from 'src/app/services/services/match-controller.service';
import { StatsControllerService } from 'src/app/services/services/stats-controller.service';
import { TotalControllerService } from 'src/app/services/services/total-controller.service';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['liste.css']
})
export class ListeComponent implements OnInit{

  matchs: Array<MatchDto> = [] 
  currentJoueurId = this.router.snapshot.params['id']
  joueur: JoueurDto = {}

constructor(
  private sService: StatsControllerService,
  private tService: TotalControllerService,
  private jService: JoueurControllerService,
  private mService: MatchControllerService,
  private router: ActivatedRoute, 
  private route: Router){

}

  ngOnInit(): void {
    this.getAllStats
  }

  getAllStats(){
    this.mService.findByEquipeId({id: this.joueur.equipeId!}).subscribe({
      next: value =>{
        this.matchs = value
      }
    })
  }

  findJoueur(){
    this.jService.findById2({id: this.currentJoueurId}).subscribe({
      next: value =>{
        this.joueur = value
      }
    })
  }

}
