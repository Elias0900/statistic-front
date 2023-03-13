import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['toats-style.css']
})
export class ToastComponent {
  @Input() title!: string;
  @Input() message!: string;
  visible = false;

  show() {
    this.visible = true;
    setTimeout(() => {
      this.hide();
    }, 3000);
  }

  hide() {
    this.visible = false;
  }
}
