import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiEndpoint = 'http://private-cc77e-aff.apiary-mock.com/posts';


  constructor(
    private httpClient: HttpClient
  ) {}


  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(): Observable<any> {
    return this.httpClient
    .get(this.apiEndpoint)
    .pipe(map(this.extractData));
  }
}
