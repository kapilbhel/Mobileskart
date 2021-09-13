import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camera } from './camera.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CameraService {
  constructor(private http: HttpClient) {}
      getCameraById(cameraId: string): Observable<Camera> {
        return this.http.get<Camera>(`http://localhost:4200/api/v1/cameras/${cameraId}`);
    }
    // generic types TODO: Explain in next lecture
  getCameras(): Observable<Camera[]> {
    return this.http.get<Camera[]>(`http://localhost:4200/api/v1/cameras`);
  }
} 