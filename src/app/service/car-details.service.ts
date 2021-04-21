import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {
  private apiUrl = ''
  auth = window.btoa('admin' + ':' + 'admin');
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Basic " + this.auth,
      "Accept": "application/json"
    })
  };
  constructor(private http: HttpClient) { }

  devices$ = this.http.get(this.apiUrl+`/api/devices`, this.httpOptions)
    .pipe(
      tap(console.table)
    );

  positions$ = this.http.get(this.apiUrl+`/api/positions`, this.httpOptions)
    .pipe(
      tap(console.table)
    );

}
