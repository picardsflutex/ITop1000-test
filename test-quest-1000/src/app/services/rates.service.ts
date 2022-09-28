import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { rateModel } from '../models/rates';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(private http: HttpClient) { }
  getRates(): Observable<rateModel>{
    return this.http.get<rateModel>('https://api.apilayer.com/exchangerates_data/latest?symbols=UAH%2CUSD&base=EUR', {
      headers: new HttpHeaders().append("apikey", "JZ5T87jnjI5OsyMmKMmAevaWawAUSPnV"),
      params: new HttpParams({
        fromObject:{
          method: 'GET',
          redirect: 'follow'
        }
      })
    })
  }
}
