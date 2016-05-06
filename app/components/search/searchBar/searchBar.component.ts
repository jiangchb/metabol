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
    query_name: String;
    query_id_reaction: String;
    query_id_metabolite: String;
    apiUrl = 'http://biodb.sehir.edu.tr/api2/search/';
    filteredMetabolites: Array<any>;
    filteredReactions: Array<any>;

    constructor(private elementRef: ElementRef, private http: Http,
        private router: Router) {

        this.generateFilters();
    }

    search() {
        if(this.query_id_reaction.length >0 )
            this.router.navigate(['ReactionDetails',{reactionId:this.query_id_reaction}]);
        else
            this.router.navigate(['MetaboliteDetails',{metaboliteId:this.query_id_metabolite}]);
    }

    filter() {
        if (this.query_name.length > 2)  //!==
            this.http.get(this.apiUrl + this.query_name).map(
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

    select_reaction(item,item2) {
        this.query_name = item;
        this.query_id_reaction = item2;
        this.generateFilters();
    }

    select_metabolite(item,item2) {
        this.query_name = item;
        this.query_id_metabolite = item2;
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
