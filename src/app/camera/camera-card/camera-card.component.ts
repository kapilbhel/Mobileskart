import { 
    Component, 
    Input} from '@angular/core';
  import { Camera } from 'src/app/camera/shared/camera.model';
  
  @Component({
    selector: 'app-camera-card',
    templateUrl: './camera-card.component.html',
    styleUrls: ['./camera-card.component.scss']
  })
  export class CameraCardComponent {
  
    @Input('cameraItem') set cameraItem(camera: Camera) {
      this.camera = camera;
    };
  
    camera: Camera;
  
  }