import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Undertwo } from './undertwo.model';

@Injectable()
export class UndertwoService {
  constructor(private http: HttpClient) {}
      getUndertwoById(undertwoId: string): Observable<Undertwo> {
        return this.http.get<Undertwo>(`http://localhost:4200/api/v1/undertwos/${undertwoId}`);
    }
    // generic types TODO: Explain in next lecture
  getUndertwos(): Observable<Undertwo[]> {
    return this.http.get<Undertwo[]>(`http://localhost:4200/api/v1/undertwos`);
  }
} 