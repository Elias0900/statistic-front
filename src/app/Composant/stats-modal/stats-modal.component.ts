import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-modal',
  templateUrl: './stats-modal.component.html',
  styleUrls: ['stats-modal.css']
})
export class StatsModalComponent {
  showModalBool = false;

  showModal() {
    this.showModalBool = true;
  }

  hideModal() {
    this.showModalBool = false;
  }
}
