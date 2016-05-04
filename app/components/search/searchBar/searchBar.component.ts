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
    searchTerm: String;
    query: String;
    apiUrl = 'http://biodb.sehir.edu.tr/api2/search/';
    filteredMetabolites: Array<any>;
    filteredReactions: Array<any>;

    constructor(private elementRef: ElementRef, private http: Http,
        private router: Router) {

        this.generateFilters();
    }

    search() {
        this.router.navigate(['Result',{searchTerm: this.query}]);
    }

    filter() {
        if (this.query.length > 2)  //!==
            this.http.get(this.apiUrl + this.query).map(
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

    select(item) {
        this.query = item;
        this.generateFilters();
    }

    handleClick(event) {
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
