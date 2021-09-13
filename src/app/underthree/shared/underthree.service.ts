import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Underthree } from './underthree.model';


@Injectable()
export class UnderthreeService {
  constructor(private http: HttpClient) {}
      getUnderthreeById(underthreeId: string): Observable<Underthree> {
        return this.http.get<Underthree>(`http://localhost:4200/api/v1/underthrees/${underthreeId}`);
    }
    // generic types TODO: Explain in next lecture
  getUnderthrees(): Observable<Underthree[]> {
    return this.http.get<Underthree[]>(`http://localhost:4200/api/v1/underthrees`);
  }
} 