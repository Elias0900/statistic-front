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
  @Input() scoreDomicile: number | undefined;
  @Input() scoreExterieur: number | undefined;
  @Input() date: string | undefined;
  @Input() equipe: EquipeDto = {};

  @Input()
  supprimerMatch(event: Event) {
    event.stopPropagation();
    // Logique de suppression ici
  }

  formatDate(date?: string): string {
    const dateObject = new Date(date!);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
}
