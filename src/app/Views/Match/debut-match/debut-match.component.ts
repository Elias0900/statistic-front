import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatchDto} from "../../../services/models/match-dto";
import {JoueurDto} from "../../../services/models/joueur-dto";
import { JoueurControllerService, MatchControllerService, EquipeControllerService, StatsControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-debut-match',
  templateUrl: './debut-match.component.html',
  styleUrls: ['debut-match.css']
})
export class DebutMatchComponent implements OnInit{

  match: MatchDto = {}
  joueursDom: Array<JoueurDto> = []
  joueursExt: Array<JoueurDto> = []
  selectedJoueur: JoueurDto = {}

  joueur: JoueurDto = {}
  error! : string
  currentMatchId = this.activeRoute.snapshot.params["id"]
  constructor(private mService: MatchControllerService,
              private route: Router,
              private jService: JoueurControllerService,
              private eService: EquipeControllerService,
              private sService: StatsControllerService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.findMatch()
    this.findJoueurParteam()
    this.findJoueurExtParteam()
    console.log(this.showModal)
    console.log(this.joueursDom)
  }


  findMatch(){
    this.mService.findById1({id: this.currentMatchId}).subscribe({
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
    this.mService.joueurDom({matchId: this.currentMatchId}).subscribe({
      next: value => {
        this.joueursDom = value
      },
      error: err =>{
        this.error = err.error.message
      }
    })
  }

  findJoueurExtParteam() {
    this.mService.joueurExt({matchId: this.currentMatchId}).subscribe({
      next: value => {
        console.log(value)
        this.joueursExt = value
      },
      error: err =>{
        this.error = err.error.message
      }
    })
  }

  showModal = false;

  
  openModal(joueur: JoueurDto) {
    this.selectedJoueur = joueur;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


  deuxpts(j: JoueurDto){
    this.sService.ajoutdeuxpoints({id: this.selectedJoueur.id!, eid: this.currentMatchId}).subscribe(
      {
        next:  () => {
          console.log(j)
          this.findMatch()
        }
      }
    )
  }

}
