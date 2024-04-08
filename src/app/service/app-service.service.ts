import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Option } from '../models/option';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  baseApi: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public getSubMenuOptions(): Observable<Array<Option>> {
    return this.http.get<Option[]>(`${this.baseApi}/options`);
  }
}
