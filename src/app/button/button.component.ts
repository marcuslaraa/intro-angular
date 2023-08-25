import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  buttonText: String = 'ACESSAR';
  @Input() label: string = '';

  getAlert(num: number) {
    alert(num);
  }
}
