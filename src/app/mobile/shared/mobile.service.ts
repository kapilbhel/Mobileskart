import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mobile } from './mobile.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MobileService {
  constructor(private http: HttpClient) {}
      getMobileById(mobileId: string): Observable<Mobile> {
        return this.http.get<Mobile>(`http://localhost:4200/api/v1/mobiles/${mobileId}`);
    }
    // generic types TODO: Explain in next lecture
  getMobiles(): Observable<Mobile[]> {
    return this.http.get<Mobile[]>(`http://localhost:4200/api/v1/mobiles`);
  }
} 