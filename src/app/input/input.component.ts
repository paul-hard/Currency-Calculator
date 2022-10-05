import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface InputDetails {
  amount: string,
  direction: string | undefined,
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() toValue: string = "";
  @Input() fromValue: string = "";
  @Input() direction?: string;
  @Output() amountChange: EventEmitter<InputDetails> = new EventEmitter();

  onKeyUp(event: string) {
    //send amount to parent component for further calculation
    this.amountChange.emit({ amount: event, direction: this.direction });
  }

}
