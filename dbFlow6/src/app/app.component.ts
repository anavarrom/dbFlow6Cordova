import { Component , OnInit } from '@angular/core';

import { LoginComponent } from './public/login/login.component';

declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  root = LoginComponent;
  ngOnInit() {
    document.addEventListener('deviceready', function() {
      // alert(device.platform);
    }, false);
    }
}
