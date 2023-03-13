import {Component, OnInit} from '@angular/core';
import {EquipeDto} from "../../../services/models/equipe-dto";
import {EquipeControllerService} from "../../../services/services/equipe-controller.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styles: []
})

export class UpdateEquipeComponent implements OnInit {

  equipe: EquipeDto = {}

  id = this.activateRoute.snapshot.params['id']

  constructor(private eService: EquipeControllerService,
              private activateRoute: ActivatedRoute,
              private route: Router,
  ) {
  }

  ngOnInit(): void {
    this.eService.getById({id: this.id}).subscribe(value => {
      console.log(value)
      this.equipe = value
    })


  }

  modifierEquipe() {
    return this.eService.modifierJoueur1({'body': this.equipe}).subscribe(
      e => {
        console.log(e)
        this.route.navigate(["equipe"])
      }
    )
  }

  supprimerEquipe() {
    let conf = confirm("Êtes vous sur de vouloir supprimer ?")
    if (conf) {
      this.eService.suppression3({'id': this.id}).subscribe(() => {
        console.log(this.id + " a été supprimé")
      })
      this.route.navigate(['/equipe'])
    }
  }


}
