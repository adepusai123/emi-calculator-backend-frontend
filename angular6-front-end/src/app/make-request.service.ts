import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {   map,  retry,  catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MakeRequestService {
  constructor(private http: HttpClient) {}
  post(url: string, data: any): Observable < any > {
    return this.http.post(`${environment.baseUrl}${url}`, data, {}).pipe(map((response: any) => this.handleResponse(response)));
  }
  get(url: string, dataParams: any): Observable<any> {
    return this.http.get(`${environment.baseUrl}${url}`, {}).pipe(map((response: any) => this.handleResponse(response)))
  }
  handleResponse(response){
     return response;
  }
}
