import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
interface  IUser {
  info: {
    male: boolean
  }
}
@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ngx170521 awesome';

  public user!: IUser;

  public constructor(
    private domSanitizer: DomSanitizer
  ) {
  }

  public tag = this.domSanitizer.bypassSecurityTrustHtml('<span style="color: red">Some</span>');


  public image = 'https://w7.pngwing.com/pngs/224/196/png-transparent-web-development-angularjs-javascript-vue-js-world-wide-web-thumbnail.png';


  public sendValue(_v: string, e: Event): void {
    console.log(e);
  }

  public keyUp(e: Event): void {
    console.log(e);
  }
}
