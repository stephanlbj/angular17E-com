import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartItem } from '../../types';
import { Observable, catchError } from 'rxjs';
import e from 'express';


@Injectable({
  providedIn: 'root'
})
export class StripeServiceService {

  
  constructor(private httpClient:HttpClient) { }


   checkout(body: cartItem[]){
      return this.httpClient.post('http://localhost:3000/checkout', {
      items: body 
      })
    }

}
