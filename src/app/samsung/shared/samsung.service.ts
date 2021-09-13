import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Samsung } from './samsung.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SamsungService {
  constructor(private http: HttpClient) {}
      getSamsungById(samsungId: string): Observable<Samsung> {
        return this.http.get<Samsung>(`http://localhost:4200/api/v1/samsungs/${samsungId}`);
    }
    // generic types TODO: Explain in next lecture
  getSamsungs(): Observable<Samsung[]> {
    return this.http.get<Samsung[]>(`http://localhost:4200/api/v1/samsungs`);
  }
} 