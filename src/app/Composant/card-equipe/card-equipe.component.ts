import {Component, Input} from '@angular/core';
import {EquipeDto} from "../../services/models/equipe-dto";

@Component({
  selector: 'app-card-equipe',
  templateUrl: './card-equipe.component.html',
  styleUrls: ['card-equipe.css']
})
export class CardEquipeComponent {


  @Input()
  rootClassName: string = 'card'
  @Input()
  image_alt: string = 'image'

  @Input() nomEquipe: string | undefined;

  @Input() equipe: EquipeDto = {};

  @Input()
  supprimerEquipe(event: Event) {
    event.stopPropagation();
    // Logique de suppression ici
  }

  /* image_src: string =
     'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200'
 */
  constructor() {
  }
}
