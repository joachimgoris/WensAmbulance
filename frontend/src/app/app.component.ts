import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FadeAnimation} from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [FadeAnimation]
})
export class AppComponent {
  visible = false; // TODO
  getAnimationData(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  constructor() {
    if (sessionStorage.getItem('Token') != null) {
      this.visible = true;
    }
  }
}
