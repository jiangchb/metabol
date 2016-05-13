import {Component, Input, OnChanges} from 'angular2/core';
import {KeysPipe} from '../../../pipes/keys.pipe';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'chemical-equation',
    pipes: [KeysPipe],
    directives:[ROUTER_DIRECTIVES],
    templateUrl: 'app/components/details/chemicalEquation/chemicalEquation.html'
})

export class ChemicalEquationComponent {
    @Input()
    metabolites: any[];
    @Input()
    selectedMetabolite: Object;
    reactants: Object = {};
    products: Object = {};


    //TODO: check if given data is resolved
    ngOnChanges() {
        this.metabolites.filter((key) => key.stoichiometry > 0)
            .map((key) => this.reactants[key.id] = key.stoichiometry);
        this.metabolites.filter((key) => key.stoichiometry < 0)
            .map((key) => this.products[key.id] = Math.abs(key.stoichiometry));

    }
}
