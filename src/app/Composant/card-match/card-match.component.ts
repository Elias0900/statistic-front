import {Component, Input} from '@angular/core';
import {EquipeDto} from "../../services/models/equipe-dto";

@Component({
  selector: 'app-card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['card-match.css']
})
export class CardMatchComponent {

  @Input()
  rootClassName: string = 'card-match'


  @Input() equipeDomicileIdNomEquipe: string | undefined;
  @Input() equipeExterieurIdNomEquipe: string | undefined;
  @Input() equipe: EquipeDto = {};

  @Input()
  supprimerMatch(event: Event) {
    event.stopPropagation();
    // Logique de suppression ici
  }
}
