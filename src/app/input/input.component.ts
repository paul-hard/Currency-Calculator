import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  title: string = "This is  the title of input component"

  @Output() amountChange = new EventEmitter<string>();

  onKeyUp(amount: string) {
    console.log(amount)
    //send amount to parent component for further calculation
    this.amountChange.emit(amount);
  }

}
