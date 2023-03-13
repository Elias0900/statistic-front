import {Component, OnInit, ViewChild} from '@angular/core';
import {EquipeDto} from "../../../services/models/equipe-dto";
import {EquipeControllerService} from "../../../services/services/equipe-controller.service";
import {Router} from "@angular/router";
import {ToastService} from "../../../Composant/toast/toast-service";
import {ToastComponent} from "../../../Composant/toast/toast.component";


@Component({
  selector: 'app-ListeEquipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['equipe.component.css']
})
export class EquipeComponent implements OnInit {

  equipes: Array<EquipeDto> = []

  equipe: EquipeDto = {}
  errorAjout!: string

  erreurEquipe!: string

  @ViewChild('toast') toastError!: ToastComponent;


  constructor(
    private eService: EquipeControllerService,
    private route: Router,

    private toast: ToastService,
  ) {
  }

  ngOnInit(): void {

    this.chargerEquipe()
    this.toast.setToast(this.toastError);
  }

  chargerEquipe() {
    this.eService.getAll().subscribe({
      next: value => {
        console.log(value)
        this.equipes = value
      },
      error: err => {
        console.log(err)
        this.erreurEquipe = err.error.message;

      }
    })
  }

  supprimerEquipe(e: EquipeDto) {
    let conf = confirm("Êtes vous sur de vouloir supprimer ?")
    if (conf) {
      this.eService.suppression3({'id': e.id!}).subscribe(() => {
        this.chargerEquipe()
      })
    }
  }

  getSupprimerEquipeFn(e: EquipeDto) {
    return (event : Event) => {
      event.stopPropagation();
      this.supprimerEquipe(e);

    }
  }

  showModal = false;

  save() {
    this.eService.nouvelEquipe({
      body: this.equipe
    }).subscribe({
      next: async () => {
        this.showModal = false;
        this.chargerEquipe()
      },
      error: err => {
        this.errorAjout = err.error.message;
        this.toast.show('Erreur', this.errorAjout);

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
