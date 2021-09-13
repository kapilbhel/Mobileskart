import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Underten } from './underten.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UndertenService {
  constructor(private http: HttpClient) {}
      getUndertenById(undertenId: string): Observable<Underten> {
        return this.http.get<Underten>(`http://localhost:4200/api/v1/undertens/${undertenId}`);
    }
    // generic types TODO: Explain in next lecture
  getUndertens(): Observable<Underten[]> {
    return this.http.get<Underten[]>(`http://localhost:4200/api/v1/undertens`);
  }
} 