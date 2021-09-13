import { Component, OnInit } from '@angular/core';
import { Camera } from '../shared/camera.model';
import { CameraService } from '../shared/camera.service';

@Component({
  selector: 'app-camera-listing',
  templateUrl: './camera-listing.component.html',
  styleUrls: ['./camera-listing.component.scss']
})
export class CameraListingComponent implements OnInit{
  cameras: Camera[] = [];

  constructor(private cameraService: CameraService){}

  ngOnInit() {

    this.cameraService.getCameras()
      .subscribe((cameras: Camera[]) => {
        this.cameras = cameras;
    });
   }
}
