import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetCurrencyService {
  constructor(
    private http: HttpClient,
  ) { };

  //display UAH/USD rate
  getDailyRate() {
    let url = `https://api.exchangerate.host/latest?base=USD&source=nbu&symbols=UAH,USD,EUR,PLN,GBP,RON,TRY`;
    return this.http.get(url)
  }

  //display EUR
  getDailyRateEuro() {
    let url = `https://api.exchangerate.host/latest?base=EUR&source=nbu&symbols=UAH,USD,EUR,PLN,GBP,RON,TRY`;
    return this.http.get(url)
  }

  //calculate currency exchange
  getCurrencyCalc(from: string, to: string, amount: string) {
    let url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
    return this.http.get(url)
  }

  //calculate currency exchange reverse
  getCurrencyCalcRevers(from: string, to: string, amount: string) {
    let url = `https://api.exchangerate.host/convert?from=${to}&to=${from}&amount=${amount}`
    return this.http.get(url)
  }
}
