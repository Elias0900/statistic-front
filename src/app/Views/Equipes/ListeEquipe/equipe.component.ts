import {Component, OnInit} from '@angular/core';
import {EquipeDto} from "../../../services/models/equipe-dto";
import {first} from "rxjs";
import {EquipeControllerService} from "../../../services/services/equipe-controller.service";
import {StrictHttpResponse} from "../../../services/strict-http-response";

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
    private eService: EquipeControllerService
  ) {  }
  ngOnInit(): void {

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




}
