import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  @Input()
  public myTitle: string = '';

  @Output()
  public toggleSideNav = new EventEmitter()

  public toggle() {
    this.toggleSideNav.emit({name: 'Michael'});
  }
}
