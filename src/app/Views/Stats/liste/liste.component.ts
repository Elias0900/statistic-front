import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurDto } from 'src/app/services/models/joueur-dto';
import { MatchDto } from 'src/app/services/models/match-dto';
import { JoueurControllerService } from 'src/app/services/services/joueur-controller.service';
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
      this.jService.findById2({id: this.currentJoueurId}).subscribe({
        next: value =>{
          this.joueur = value
          console.log(value)
          console.log(this.joueur.equipeId)
          this.getAllMatch()
        }
      })
  
  }
  
  ngOnInit(): void {
    // La méthode getAllMatch() sera appelée dans le callback de subscribe()
  }
  
  getAllMatch(){
    this.mService.findByEquipeId({id: this.joueur.equipeId!}).subscribe({
      next: value => {
        console.log(this.joueur.equipeId)
          this.matchs = value
          console.log("match" + value)
      },
    })
  }
}