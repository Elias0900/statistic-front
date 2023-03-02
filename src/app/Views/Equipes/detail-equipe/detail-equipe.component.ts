import {Component, OnInit} from '@angular/core';
import {JoueurDto} from "../../../services/models/joueur-dto";
import {JoueurControllerService} from "../../../services/services/joueur-controller.service";
import {EquipeControllerService} from "../../../services/services/equipe-controller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styles: [
  ]
})
export class DetailEquipeComponent implements OnInit  {

  joueurs: Array<JoueurDto> = []

  joueur: JoueurDto = {}
  id = this.activeRoute.snapshot.params['id']




  constructor(private jService: JoueurControllerService,
              private eService : EquipeControllerService,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    this.findJoueurParteam();
  }

   findJoueurParteam(){
    this.jService.joueurParTeam({id: this.id}).subscribe({
      next: value => {
        console.log(value)
        this.joueurs = value
      }
    })
  }

  async cancel() {
    await this.router.navigate(['/equipe'])
  }





}
