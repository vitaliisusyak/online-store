import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) {}

  getProductById(jsonURL: string, id: string): Observable<any> {
    return this.http.get(jsonURL + '/' + id);
  }
}
