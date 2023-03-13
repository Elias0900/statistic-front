import {Component} from '@angular/core';

@Component({
  selector: 'app-add-team-modal',
  templateUrl: './add-team-modal.component.html',
  styleUrls: ['add-team-modal.css']
})
export class AddTeamModalComponent {
  showModalBool = false;

  showModal() {
    this.showModalBool = true;
  }

  hideModal() {
    this.showModalBool = false;
  }

}
