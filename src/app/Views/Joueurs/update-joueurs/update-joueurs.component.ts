import {Component, OnInit} from '@angular/core';
import {JoueurControllerService} from "../../../services/services/joueur-controller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JoueurDto} from "../../../services/models/joueur-dto";

@Component({
  selector: 'app-update-joueurs',
  templateUrl: './update-joueurs.component.html',
  styles: []
})
export class UpdateJoueursComponent implements OnInit {

  joueur: JoueurDto = {}
  id = this.activeRoute.snapshot.params['joueurid']


  constructor(private jService: JoueurControllerService,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.jService.findById1({id: this.id}).subscribe(value => {
      console.log(value)
      this.joueur = value
    })
  }

  modifierJoueur() {
    return this.jService.modifierJoueur({'body': this.joueur}).subscribe(
      () => {
        this.router.navigate(["/detail-equipe", this.joueur.equipeId])
      }
    )
  }
}
