import {Component, OnInit, ViewChild} from '@angular/core';
import {JoueurDto} from "../../../services/models/joueur-dto";
import {JoueurControllerService} from "../../../services/services/joueur-controller.service";
import {EquipeControllerService} from "../../../services/services/equipe-controller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "../../../Composant/toast/toast-service";
import {ToastComponent} from "../../../Composant/toast/toast.component";
import {EquipeDto} from "../../../services/models/equipe-dto";

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['detail-equipe.css']
})
export class DetailEquipeComponent implements OnInit {

  joueurs: Array<JoueurDto> = []

  joueur: JoueurDto = {}
  id = this.activeRoute.snapshot.params['id']

  equipe: EquipeDto = {}


  errorAjout!: string

  @ViewChild('toast') toastError!: ToastComponent;



  constructor(private jService: JoueurControllerService,
              private eService: EquipeControllerService,
              public activeRoute: ActivatedRoute,
              private toast: ToastService,

              private router: Router) {
  }

  ngOnInit(): void {
    this.findJoueurParteam();
    this.joueur.equipeId = this.id
    this.findEquipe()
  }

  findJoueurParteam() {
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

  supprimerJoueur(j: JoueurDto) {
    let conf = confirm("Êtes vous sur de vouloir supprimer ?")
    if (conf) {
      this.jService.suppression2({'id': j.id!}).subscribe(() => {
        this.findJoueurParteam()
      })

    }
  }

  showModal = false;

  saveJoueur() {
    this.jService.newJoueur({
      body: this.joueur
    }).subscribe({
      next: async () => {
        this.showModal = false;
        this.findJoueurParteam()
      },
      error: err => {
        this.errorAjout = err.error.message;
        this.toast.show('Erreur', this.errorAjout);

      }
    })
  }

  findEquipe(){
    this.eService.getById({id: this.joueur.equipeId!}).subscribe({
      next: value => {
        console.log(value)
        this.equipe = value
    }
    })
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


}
