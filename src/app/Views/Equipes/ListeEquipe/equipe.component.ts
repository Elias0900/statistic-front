import {Component, OnInit} from '@angular/core';
import {EquipeDto} from "../../../services/models/equipe-dto";
import {first} from "rxjs";
import {EquipeControllerService} from "../../../services/services/equipe-controller.service";
import {StrictHttpResponse} from "../../../services/strict-http-response";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ListeEquipe',
  templateUrl: './equipe.component.html',
  styles: [
  ]
})
export class EquipeComponent  implements OnInit {

  equipes: Array<EquipeDto> = []
  error!: string

  constructor(
    private eService: EquipeControllerService,
    private route: Router
  ) {  }
  ngOnInit(): void {

    this.chargerEquipe()


  }

  chargerEquipe(){
    this.eService.getAll().subscribe({
      next: value => {
        console.log(value)
        this.equipes = value
      },
      error: () => {
        this.error = "Il n'y a pas d'équipes !"
      }
    })
  }

  supprimerEquipe(e: EquipeDto){
    let conf = confirm("Êtes vous sur de vouloir supprimer ?")
    if (conf) {
      this.eService.suppression3({'id': e.id!}).subscribe(()=>{
        this.chargerEquipe()
      })

    }
  }


}
