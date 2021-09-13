import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moto } from './moto.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MotoService {
  constructor(private http: HttpClient) {}
      getMotoById(motoId: string): Observable<Moto> {
        return this.http.get<Moto>(`http://localhost:4200/api/v1/motos/${motoId}`);
    }
    // generic types TODO: Explain in next lecture
  getMotos(): Observable<Moto[]> {
    return this.http.get<Moto[]>(`http://localhost:4200/api/v1/motos`);
  }
} 