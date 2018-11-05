import { Component } from '@angular/core';

@Component({
  selector: 'bv-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  display = false;

  constructor() { }

  inputChange() {
    this.display = true;
  }

}
