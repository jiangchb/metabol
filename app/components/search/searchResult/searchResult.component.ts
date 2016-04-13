import {Component} from 'angular2/core';
import {SearchBarComponent} from '../searchBar/searchBar.component';

@Component({
    selector: 'search-result',
    templateUrl: '/app/components/search/searchResult/searchResult.html',
    directives: [SearchBarComponent]
})
export class SearchResultComponent { }
