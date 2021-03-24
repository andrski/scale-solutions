import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../baseUrl';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Origin', 'www.mrsoft.by');

    return this.http.get(BASE_API_URL, {headers});
  }
}
