import {Component, OnInit} from '@angular/core';
import {JoueurControllerService} from "../../../services/services/joueur-controller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JoueurDto} from "../../../services/models/joueur-dto";

@Component({
  selector: 'app-ajout-joueur',
  templateUrl: './ajout-joueur.component.html',
  styles: [
  ]
})
export class AjoutJoueurComponent implements OnInit{

  joueur: JoueurDto = {}
  id = this.activeRoute.snapshot.params['id']

  constructor(private jService: JoueurControllerService,
              private activeRoute: ActivatedRoute,
              private route: Router) {
  }
  ngOnInit(): void {
    this.joueur.equipeId = this.id

  }


  ajouterJoueur() {
    this.jService.newJoueur({body: this.joueur}).subscribe({
      next: () => {
        console.log(this.joueur)
        this.route.navigate(['/detail-equipe', this.id])
    }
    })
  }
}
