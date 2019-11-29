import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()

export class AccessoriesService {
  private jsonURL = '../../../assets/accessories.json';

  constructor(private http: HttpClient) {
  }

  getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
