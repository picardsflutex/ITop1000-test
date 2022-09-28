import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { rateModel } from '../models/rates';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  constructor(private http: HttpClient) { }
  getExchanges(from = 'USD, UAH', to = 'EUR'): Observable<rateModel>{
    return this.http.get<rateModel>('https://api.apilayer.com/exchangerates_data/latest', {
      headers: new HttpHeaders().append("apikey", "JZ5T87jnjI5OsyMmKMmAevaWawAUSPnV"),
      params: new HttpParams({
        fromObject:{
          symbols: from,
          base: to,
          method: 'GET',
          redirect: 'follow'
        }
      })
    })
  }
}
