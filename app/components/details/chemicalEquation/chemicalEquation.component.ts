import {Component, Input} from 'angular2/core';

@Component({
    selector: 'chemical-equation',
    template: `
    `
})

export class ChemicalEquationComponent {
    @Input()
    metabolites: { [key: string]: number };
    reactants: { [key: string]: number };
    products: { [key: string]: number };

    constructor() {
        Object.keys(this.metabolites).filter(
            (x) => this.metabolites[x] > 0).map(
            (x) => this.reactants[x] = this.metabolites[x]);

        Object.keys(this.metabolites).filter(
            (x) => this.metabolites[x] < 0).map(
            (x) => this.products[x] = this.metabolites[x]);
    }
}
