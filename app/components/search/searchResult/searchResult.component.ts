import {Component} from 'angular2/core';
import {SearchBarComponent} from '../searchBar/searchBar.component';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouterLink, RouteParams} from 'angular2/router';
import {SearchResultService} from '../../../services/searchResult/searchResult.service';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'search-result',
    providers: [SearchResultService],
    templateUrl: '/app/components/search/searchResult/searchResult.html',
    directives: [SearchBarComponent, ROUTER_DIRECTIVES],
    styleUrls:['app/components/search/searchResult/searchResult.css']
})
export class SearchResultComponent {
    query_name: string;
    filteredMetabolites: Array<any>;
    filteredReactions: Array<any>;
    n:number; //sum of list to get 'NOTHING FOUND'

    constructor(
        private _searchResultService: SearchResultService,
        params: RouteParams, private http: Http) {
        this.query_name = params.get('resultName');
        this.getSearchResult(this.query_name);
        this.generateFilters();
        setTimeout(() => { // to delay 'NOTHING FOUND'
          this.n = this.filteredReactions.length + this.filteredMetabolites.length;
      }, 600);

    }

    private getSearchResult(query_name: string) {
        if (this.query_name.length > 0)
            this._searchResultService.getSearchResult(query_name).subscribe(
                data => {
                    this.filteredReactions = data["reactions"];
                    this.filteredMetabolites = data["metabolites"];
                });
        else
            this.generateFilters();
    }



    generateFilters() {
        this.filteredReactions = new Array<any>();
        this.filteredMetabolites = new Array<any>();
    }
}
