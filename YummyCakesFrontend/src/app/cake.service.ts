import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cake } from './cake';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  private baseURL = "http://localhost:8090/api/v1/cake";

  constructor(private httpClient: HttpClient) { }
  
  getCakeList(): Observable<Cake[]>{
    return this.httpClient.get<Cake[]>(`${this.baseURL}`);
  }

  createCake(cake: Cake): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cake);
  }

  getCakeById(id: number): Observable<Cake>{
    return this.httpClient.get<Cake>(`${this.baseURL}/${id}`);
  }

  updateCake(id: number, cake: Cake): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cake);
  }

  deleteCake(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
