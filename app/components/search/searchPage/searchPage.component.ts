import {Component} from 'angular2/core';
import {SearchBarComponent} from '../searchBar/searchBar.component';

@Component({
    selector: 'search-page',
    templateUrl: '/app/components/search/searchPage/searchPage.html',
    directives: [SearchBarComponent],
    styleUrls:['app/components/search/searchPage/searchPage.css']
})
export class SearchPageComponent {}
