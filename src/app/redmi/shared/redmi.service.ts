import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redmi } from './redmi.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RedmiService {
  constructor(private http: HttpClient) {}
      getRedmiById(redmiId: string): Observable<Redmi> {
        return this.http.get<Redmi>(`http://localhost:4200/api/v1/redmis/${redmiId}`);
    }
    // generic types TODO: Explain in next lecture
  getRedmis(): Observable<Redmi[]> {
    return this.http.get<Redmi[]>(`http://localhost:4200/api/v1/redmis`);
  }
} 