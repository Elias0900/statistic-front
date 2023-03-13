import {Component, OnInit} from '@angular/core';
import {EquipeDto} from "../../../services/models/equipe-dto";
import {EquipeControllerService} from "../../../services/services/equipe-controller.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styles: []
})
export class NewTeamComponent implements OnInit {
  equipe: EquipeDto = {}
  private errorMessages: any;

  constructor(
    private eService: EquipeControllerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  save() {
    this.eService.nouvelEquipe({
      body: this.equipe
    }).subscribe({
      next: async () => {
        await this.router.navigate(['equipe'])
      },

    })
  }

  async cancel() {
    await this.router.navigate(['equipe'])
  }


}
