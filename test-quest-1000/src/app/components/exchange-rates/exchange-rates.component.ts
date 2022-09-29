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
    this.exchangeValue2 = parseFloat((this.exchangeValue1 * this.exchangeRates[0]).toFixed(5))
  }
  onChangeTo() {
    this.exchangeValue1 = parseFloat((this.exchangeValue2 / this.exchangeRates[0]).toFixed(5))
  }
  onChangeRate1(newValue: string) {
    this.selectedRate1 = newValue;
    this.setRate(this.selectedRate1, this.selectedRate2)
  }
  onChangeRate2(newValue: string) {
    this.selectedRate2 = newValue;
    this.setRate(this.selectedRate1, this.selectedRate2)
  }
  setRate(value1: string, value2: string){
    if(value1 == value2) this.exchangeRates[0] = 1;
    if(parseInt(value1) > parseInt(value2)) this.exchangeRates[0] = this.exchangeRates[parseInt(value2)] / this.exchangeRates[parseInt(value1)]
    if(parseInt(value1) < parseInt(value2)) this.exchangeRates[0] = 1 / this.exchangeRates[parseInt(value1)] * this.exchangeRates[parseInt(value2)]
  }
  exchangeRates : number[] = []
  exchangeValue1 = 1
  exchangeValue2 = this.exchangeValue1 * this.exchangeRates[0] | 1
  selectedRate1 = '1'
  selectedRate2 = '1'
  ngOnInit(): void {
    this.exchangeServise.getExchanges().subscribe(exchange => {
      this.exchangeRates = this.exchangeRates.concat([1,1], Object.values(exchange.rates))
      console.log(this.exchangeRates)
    })
  }
}
