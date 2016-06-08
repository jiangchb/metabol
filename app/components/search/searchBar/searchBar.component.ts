import {Component, ElementRef} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, Router} from 'angular2/router';


@Component({
    selector: 'search-bar',
    host: {
        '(document:click)': 'handleClick($event)',
    },

    templateUrl: '/app/components/search/searchBar/searchBar.html',
})
export class SearchBarComponent {
    query_name: String;
    apiUrl = 'http://biodb.sehir.edu.tr/api2/searchprefix/';
    filteredMetabolites: Array<any>;
    filteredReactions: Array<any>;

    constructor(private elementRef: ElementRef, private http: Http,
        private router: Router) {

        this.generateFilters();

    }

    search() {
        if (!this.query_name)
            this.router.navigate(['Page']);
        else
            this.router.navigate(['Result', { resultName: this.query_name }]);
        this.query_name = "";//To delete input if input is same
        this.filteredReactions = [];//To close autocomplete if input is same
        this.filteredMetabolites = [];//To close autocomplete if input is same
    }

    filter() { //This function search in api

        if (this.query_name.length > 2)  //!==
            this.http.get(this.apiUrl + this.query_name).map(
                response => response.json()).subscribe(
                data => {
                    console.log(data);
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

    selectSearch(searchPrefix) {
        this.query_name = searchPrefix;
        this.generateFilters();
    }

    handleClick(event) { //This function closes the autocomplete when click anywhere
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement)
                inside = true;
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);

        if (!inside) this.generateFilters();
    }

}
