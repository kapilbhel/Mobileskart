import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bat } from './bat.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BatService {
  constructor(private http: HttpClient) {}
      getBatById(batId: string): Observable<Bat> {
        return this.http.get<Bat>(`http://localhost:4200/api/v1/bats/${batId}`);
    }
    // generic types TODO: Explain in next lecture
  getBats(): Observable<Bat[]> {
    return this.http.get<Bat[]>(`http://localhost:4200/api/v1/bats`);
  }
} 