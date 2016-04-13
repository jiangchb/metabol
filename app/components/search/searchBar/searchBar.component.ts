import {Component} from 'angular2/core';

@Component({
    selector: 'search-bar',
    templateUrl: '/app/components/search/searchBar/searchBar.html',
})
export class SearchBarComponent {
    searchTerm: String;

    constructor() { }

    search() { }
}
