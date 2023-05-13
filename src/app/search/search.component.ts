import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    public searchString: string = "";

    constructor(
      private readonly router: Router
    ) {}
    toSearch() {

    }
}
