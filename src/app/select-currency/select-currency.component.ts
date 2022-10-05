import { Component, Input, EventEmitter, Output } from '@angular/core';


//require service configuration
export interface SelectDetails {
  currency: string,
  //to recognize which select field was in usage
  direction: string | undefined
}

@Component({
  selector: 'app-select-currency',
  templateUrl: './select-currency.component.html',
  styleUrls: ['./select-currency.component.css']
})
export class SelectCurrencyComponent {

  @Input() selectedCurrencyFrom: string = 'USD';
  @Input() selectedCurrencyTo: string = 'UAH';
  @Input() currenciesCollection: string[] = [];
  @Input() direction?: string;
  //send to parent for further calculation
  @Output() onSelect: EventEmitter<SelectDetails> = new EventEmitter();


  currencySelect(event: string) {
    this.onSelect.emit({ currency: event, direction: this.direction });
  }

}
