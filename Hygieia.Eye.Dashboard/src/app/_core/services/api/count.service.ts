import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor(
    private http: HttpClient
  ) { }

  getCount(){
    return this.http.get(`${environment.api}/dashboard/getcrowd`)
  }
}
