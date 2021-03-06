import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable()

export class SuitsService {
  private jsonURL = 'http://localhost:4200/suits';

  constructor(private http: HttpClient) {
  }

  getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}

