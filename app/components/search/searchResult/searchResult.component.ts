import {Component} from 'angular2/core';
import {SearchBarComponent} from '../searchBar/searchBar.component';
import {RouteParams} from 'angular2/router';


@Component({
    selector: 'search-result',
    templateUrl: '/app/components/search/searchResult/searchResult.html',
    directives: [SearchBarComponent]
})
export class SearchResultComponent {

constructor(params:RouteParams){

    console.log(params.get("searchTerm"));


}



}
