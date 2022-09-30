import { Component, OnInit } from '@angular/core';
import { GetCurrencyService } from '../get-currency.service'
import { SelectDetails } from '../select-currency/select-currency.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor(
    private service: GetCurrencyService,
  ) { }

  // Refactored version --------------------------------------------------------------------------------------------------------

  currenciesCollection: string[] = [];
  currentAmount: string = '1';
  selectedCurrencyFrom: string = 'USD';
  selectedCurrencyToo: string = 'UAH';
  toValue: string = ""

  changeAmount(updateAmount: string) {
    this.currentAmount = updateAmount;
    this.service.getCurrencyCalc(this.selectedCurrencyFrom, this.selectedCurrencyToo, this.currentAmount).subscribe(response => {
      this.toValue = response.result



    })
  }


  displayCurrency(event: SelectDetails) {
    if (event.direction === 'from') {
      this.selectedCurrencyFrom = event.currency
    } else {
      this.selectedCurrencyToo = event.currency
    }
    this.service.getCurrencyCalc(this.selectedCurrencyFrom, this.selectedCurrencyToo, this.currentAmount).subscribe(response => {
      this.toValue = response.result
    })
  }





  // Refactored version --------------------------------------------------------------------------------------------------------






  dailyRate: any;
  dailyRateEuro: any;

  selectedCurrencyFor: any = "USD";
  selectedCurrencyTo: any = "UAH";
  userInput: any = ""
  userInputRevers: any = ""
  output: any = "";
  outputRevers: any = ""

  ngOnInit() {
    //Dislpay USD, take collection of selected currencies
    this.service.getDailyRate().subscribe(response => {
      this.dailyRate = response


      this.currenciesCollection = Object.keys(this.dailyRate.rates)
    });

    //Display EUR
    this.service.getDailyRateEuro().subscribe(response => {
      this.dailyRateEuro = response
    });

    //Display default resoult USD / UAH
    this.service.getCurrencyCalc(this.selectedCurrencyFor, this.selectedCurrencyTo, this.userInput).subscribe(response => {
      this.userInputRevers = response
    })
  }

  //Select first currency
  handleCurrencySelectFor(event: any) {
    this.selectedCurrencyFor = event.target.value
    this.service.getCurrencyCalc(this.selectedCurrencyFor, this.selectedCurrencyTo, this.userInput).subscribe(response => {
      this.userInputRevers = response
    })
  }

  //Select second currency
  handleCurrencySelectTo(event: any) {
    this.selectedCurrencyTo = event.target.value
    this.service.getCurrencyCalc(this.selectedCurrencyFor, this.selectedCurrencyTo, this.userInput).subscribe(response => {
      this.userInputRevers = response
    })
  }

  //Input amount 
  handleAmountInput(event: any) {
    this.userInput = event
    this.service.getCurrencyCalc(this.selectedCurrencyFor, this.selectedCurrencyTo, event).subscribe(response => {
      this.userInputRevers = response
      console.log(response);
    })
  }

  //Revers input amount
  handleAmountInputRevers(event: any) {
    this.userInputRevers = event;
    this.service.getCurrencyCalcRevers(this.selectedCurrencyFor, this.selectedCurrencyTo, event).subscribe(response => {
      this.userInput = response

    })
  }
}
