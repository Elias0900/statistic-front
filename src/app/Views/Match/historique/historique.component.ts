import {Component, OnInit} from '@angular/core';
import {MatchControllerService} from "../../../services/services/match-controller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatchDto} from "../../../services/models/match-dto";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['historique.css']
})
export class HistoriqueComponent implements OnInit {

  matchs: MatchDto[] = []
  error!: string

  constructor(private mService: MatchControllerService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllMatch()
  }

  getAllMatch() {
    this.mService.tousLesMatchs().subscribe({
      next: value => {
        this.matchs = value
      },
      error: err => {
        this.error = err.error.message
      }
    })
  }

  supprimerMatch(match: MatchDto) {
    let conf = confirm("Êtes vous sur de vouloir supprimer ?")
    if (conf) {
      this.mService.suppression1({'id': match.id!}).subscribe(() => {
        this.getAllMatch()
      })
    }

  }

  getSupprimerMatchFn(m: MatchDto) {
    return (event : Event) => {
      event.stopPropagation();
      this.supprimerMatch(m);

    }
  }
}
