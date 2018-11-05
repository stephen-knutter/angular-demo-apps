import { Component, Input } from '@angular/core';

@Component({
  selector: 'bv-search',
  templateUrl: 'search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() display: boolean;

  constructor() { }
}
