import {Component,ElementRef} from 'angular2/core';

@Component({
    selector: 'search-bar',
    host: {
        '(document:click)': 'handleClick($event)',
    },

    templateUrl: '/app/components/search/searchBar/searchBar.html',
})
export class SearchBarComponent {
    searchTerm: String;
    query = '';
    countries = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
                       "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
                       "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
                       "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo",
                       "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
                       "Moldova","Monaco","Montenegro","Netherlands","Norway","Poland",
                       "Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia",
                       "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];
    public elementRef;
    public filteredList = [];
    constructor(myElement: ElementRef) {
        this.elementRef = myElement;}


    search() { }
    filter() {
    if (this.query !== ""){
        this.filteredList = this.countries.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) === 0;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}

select(item){
    this.query = item;
    this.filteredList = [];
}

handleClick(event){
   var clickedComponent = event.target;
   var inside = false;
   do {
       if (clickedComponent === this.elementRef.nativeElement) {
           inside = true;
       }
      clickedComponent = clickedComponent.parentNode;
   } while (clickedComponent);
    if(!inside){
        this.filteredList = [];
    }
}

}
