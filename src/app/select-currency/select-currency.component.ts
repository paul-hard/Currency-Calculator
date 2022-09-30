import { Component, Input, EventEmitter, Output } from '@angular/core';


//require service configuration
export interface SelectDetails {
  currency: string,
  direction: string | undefined
}

@Component({
  selector: 'app-select-currency',
  templateUrl: './select-currency.component.html',
  styleUrls: ['./select-currency.component.css']
})
export class SelectCurrencyComponent {


  //in porpouse of rendering currencies list
  @Input() currenciesCollection: string[] = [];
  @Input() direction?: string
  //send to parent for further calculation
  @Output() onSelect: EventEmitter<SelectDetails> = new EventEmitter();

  ngOnInit(): void {
  }

  currencySelect(event: string) {
    console.log(event)
    this.onSelect.emit({ currency: event, direction: this.direction });
  }

}
