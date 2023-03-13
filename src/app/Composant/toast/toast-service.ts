import {Injectable, Input, OnInit} from '@angular/core';
import { ToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService implements OnInit{
  toast!: ToastComponent;

  setToast(toast: ToastComponent) {
    this.toast = toast;
  }

  show(title: string, message: string) {
    this.toast.title = title;
    this.toast.message = message;
    this.toast.show();
    setTimeout(() => this.toast.hide(), 3000);

  }

  ngOnInit(): void {

  }
}
