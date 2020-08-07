import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaucerService {
  endpoint='http://localhost:3800/food';
  httOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private extractData (res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http: HttpClient) { }

  getSaucers():Observable<any>{
    return this.http.get(`${this.endpoint}/showSaucer`, this.httOptions).pipe(map(this.extractData));
  }

  getSaucer(search){
    var p = {search: search};
    var params = JSON.stringify(p);

    let httOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(this.endpoint + 'getSaucer', params, httOptionsAuth).pipe(map(this.extractData));
  }
}
