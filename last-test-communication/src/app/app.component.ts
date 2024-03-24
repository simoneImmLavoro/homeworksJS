import { Component } from '@angular/core';
import { Cose } from './cose.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'last-test-communication';

  leMieCose: Cose[];

  onMoveCose(leMieCose: Cose[]){
    this.leMieCose = leMieCose;
    console.log(leMieCose);
  }
}
