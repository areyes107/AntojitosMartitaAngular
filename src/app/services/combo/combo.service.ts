import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComboService {
  endpoint='http://localhost:3800/food/';
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private extractData (res: Response){
    let body = res;
    return body || [] || {}
  }

  constructor(private http: HttpClient) { }

  getCombos():Observable<any>{
    return this.http.get(`${this.endpoint}/showCombo`, this.httpOptions).pipe(map(this.extractData));
  }

  getCombo(search){
    var p = {search: search};
    var params = JSON.stringify(p);

    let httpOptionsAuth ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token');
      })
    }
    return this.http.post(this.endpoint + 'getCombo', params, httpOptionsAuth).pipe(map(this.extractData));
  }
}
