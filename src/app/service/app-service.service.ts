import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Option } from '../models/option';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {


public checkedArray: Array<boolean> =[];
public stringArray: Array<string> = [];
public selectedOptions: Array<string> = [];
public multiSelectedOptions:Array<Array<string>> = [];
public dateSelected: Array<Date> = [];
public imageUrls: Array<string> = [];
 

  baseApi: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public getSubMenuOptions(): Observable<Array<Option>> {
    return this.http.get<Option[]>(`${this.baseApi}/options`);
  }
  
  sendApiRequest(apiUrl: string): Observable<any> {
    const timestamp = new Date().toISOString();
    const requestData = {
      checkedArray: this.checkedArray,
      stringArray: this.stringArray,
      selectedOptions: this.selectedOptions,
      multiSelectedOptions: this.multiSelectedOptions,
      dateSelected: this.dateSelected,
      imageUrls: this.imageUrls,
      timestamp: timestamp
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(apiUrl, requestData, { headers: headers });
  }
}
