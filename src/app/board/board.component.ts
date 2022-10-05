import { Component, OnInit } from '@angular/core';
import { GetCurrencyService } from '../get-currency.service'
import { SelectDetails } from '../select-currency/select-currency.component';
import { InputDetails } from '../input/input.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor(
    private service: GetCurrencyService,
  ) { }


  dailyRate: string = "";
  dailyRateEuro: string = ""
  currenciesCollection: string[] = [];
  currentAmount: string = "";
  selectedCurrencyFrom: string = 'USD';
  selectedCurrencyTo: string = 'UAH';
  toValue: string = "";
  fromValue: string = "";

  ngOnInit() {
    //Dislpay USD, take collection of selected currencies
    this.service.getDailyRate().subscribe(response => {
      this.dailyRate = response.rates.UAH
      this.currenciesCollection = Object.keys(response.rates)
    });
    //Display EUR
    this.service.getDailyRateEuro().subscribe(response => {
      this.dailyRateEuro = response.rates.UAH;
    });

  }
  changeAmount(event: InputDetails) {
    this.currentAmount = event.amount;
    if (event.direction === 'from') {
      this.service.getCurrencyCalc(this.selectedCurrencyFrom, this.selectedCurrencyTo, this.currentAmount).subscribe(response => {
        this.toValue = response.result
      })
    } else {
      this.service.getCurrencyCalc(this.selectedCurrencyTo, this.selectedCurrencyFrom, this.currentAmount).subscribe(response => {
        this.fromValue = response.result
      })
    }
  }

  displayCurrency(event: SelectDetails) {
    if (event.direction === 'from') {
      this.selectedCurrencyFrom = event.currency
      this.service.getCurrencyCalc(this.selectedCurrencyFrom, this.selectedCurrencyTo, this.currentAmount).subscribe(response => {
        this.toValue = response.result
      })
    } else {
      this.selectedCurrencyTo = event.currency
      this.service.getCurrencyCalc(this.selectedCurrencyTo, this.selectedCurrencyFrom, this.currentAmount).subscribe(response => {
        this.fromValue = response.result
      })
    }
  }

}
