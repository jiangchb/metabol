import {Component} from 'angular2/core';
import {SearchBarComponent} from '../searchBar/searchBar.component';
import {ROUTER_DIRECTIVES,ROUTER_PROVIDERS, RouteConfig, RouterLink, RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'search-result',
    templateUrl: '/app/components/search/searchResult/searchResult.html',
    directives: [SearchBarComponent, ROUTER_DIRECTIVES]
})
export class SearchResultComponent {
    query_name: string;
    query_id_reaction: String;
    query_id_metabolite: String;
    apiUrl = 'http://biodb.sehir.edu.tr/api2/search/';
    filteredMetabolites: Array<any>;
    filteredReactions: Array<any>;

    constructor(params: RouteParams,private http: Http) {
        this.query_name = params.get('resultName');
        this.filter()
        this.generateFilters();


    }

    filter() {

        if (this.query_name.length > 2)
            this.http.get(this.apiUrl +this.query_name).map(
                response => response.json()).subscribe(
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
