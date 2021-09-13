import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CameraService } from '../shared/camera.service';
import { Camera } from '../shared/camera.model';

@Component({
  selector: 'app-camera-detail',
  templateUrl: './camera-detail.component.html',
  styleUrls: ['./camera-detail.component.scss']
})
export class CameraDetailComponent {

  camera: Camera;
  constructor(
    private cameraService: CameraService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cameraService
        .getCameraById(params['cameraId'])
        .subscribe(camera => {
          this.camera = camera;
        })
    })
  }
}