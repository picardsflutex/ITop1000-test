import { Component, Input, OnInit } from '@angular/core';
import { RatesService } from 'src/app/services/rates.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loading = false
  constructor(private ratesServise: RatesService) { }
  rateBuyEUR = 0
  rateSellEUR = 0
  rateBuyUSD = 0
  rateSellUSD = 0
  ngOnInit(): void {
    this.loading = true
    this.ratesServise.getRates().subscribe(rates => {
      this.rateBuyEUR = rates.rates.UAH
      this.rateSellEUR = this.rateBuyEUR * 1.05
      this.rateBuyUSD = this.rateBuyEUR / rates.rates.USD
      this.rateSellUSD = this.rateBuyUSD * 1.05
      this.loading = false
    })
  }
}