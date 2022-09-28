import { Component, OnInit } from '@angular/core';
import { ExchangesService } from 'src/app/services/exchanges.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {
  constructor(private exchangeServise: ExchangesService) { }
  onChangeFrom() {
    this.exchangeValue2 = parseFloat((this.exchangeValue1 * this.exchangeRateMain).toFixed(5))
  }
  onChangeTo() {
    this.exchangeValue1 = parseFloat((this.exchangeValue2 / this.exchangeRateMain).toFixed(5))
  }
  onChangeRate1(newValue: string) {
    console.log(newValue)
    console.log(this.selectedRate1)
    this.setRate(newValue, this.selectedRate2)
    console.log(this.exchangeRateMain)
    this.selectedRate1 = newValue;
  }
  onChangeRate2(newValue: string) {
    console.log(newValue)
    console.log(this.selectedRate1)
    this.setRate(newValue, this.selectedRate1)
    console.log(this.exchangeRateMain)
    this.selectedRate2 = newValue;
  }
  setRate(newValue: string, oldValue: string){
    if(newValue == oldValue) this.exchangeRateMain = 1;
    else if(newValue == '1' && oldValue == '3' || newValue == '3' && oldValue == '1') this.exchangeRateMain = this.exchangeRateUAH;
    else if(newValue == '2' && oldValue == '1' || newValue == '1' && oldValue == '2') this.exchangeRateMain = this.exchangeRateUSD;
    else if(newValue == '2' && oldValue == '3' || newValue == '3' && oldValue == '2') this.exchangeRateMain = this.exchangeRateUAH / this.exchangeRateUSD;
  }
  exchangeValue1 = 1
  exchangeRateMain = 1
  exchangeRateUSD = 0.9627
  exchangeRateUAH = 35.825523
  exchangeValue2 = this.exchangeValue1 * this.exchangeRateMain
  selectedRate1 = '1'
  selectedRate2 = '1'
  ngOnInit(): void {
    this.exchangeServise.getExchanges().subscribe(exchange => {
      this.exchangeRateMain = exchange.rates.USD
      this.exchangeRateUSD = exchange.rates.USD
      this.exchangeRateUAH = exchange.rates.UAH
    })
  }

}
