import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from "rxjs";

export interface ExchangeResult {
  motd: { msg: string, url: string },
  success: boolean,
  query: { from: string, to: string, amount: string },
  info: { rate: string },
  historical: false,
  date: string,
  result: string,
}

export interface DailyRate {
  base: string,
  rates: {
    UAH: string,
    GBP: string,
    USD: string,
    RON: string,
    TRY: string,
    PLN: string,
    EUR: string
  }
}

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
    return this.http.get(url).pipe(map(response => response as DailyRate));
  }

  //display EUR
  getDailyRateEuro(): Observable<DailyRate> {
    let url = `https://api.exchangerate.host/latest?base=EUR&source=nbu&symbols=UAH,USD,EUR,PLN,GBP,RON,TRY`;
    return this.http.get(url).pipe(map(response => response as DailyRate));
  }

  //calculate currency exchange
  getCurrencyCalc(from: string, to: string, amount: string): Observable<ExchangeResult> {
    let url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
    return this.http.get(url).pipe(map(response => response as ExchangeResult));
  }
}
