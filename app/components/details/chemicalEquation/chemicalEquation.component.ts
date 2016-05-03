import {Component, Input, OnChanges} from 'angular2/core';
import {KeysPipe} from '../../../pipes/keys.pipe';

@Component({
    selector: 'chemical-equation',
    pipes: [KeysPipe],
    template: `
    <ul>
      <li *ngFor="#key of reactants|Keys;  #count = index">
          {{(0!=count) ? "+" : ""}}
          {{(reactants[key]>1) ? key : ""}}{{key}}
      </li>
      →
      <li *ngFor="#key of products|Keys #count = index">
          {{(0!=count) ? "+" : ""}}
          {{(products[key]>1) ? key : ""}}{{key}}
      </li>
    </ul>
    `,
    styles: [`
      li {
      display: inline;
      }
      `]
})

export class ChemicalEquationComponent {
    @Input()
    metabolites: { [key: string]: number };
    reactants: { [key: string]: number } = {};
    products: { [key: string]: number } = {};

    ngOnChanges(): void {
        Object.keys(this.metabolites)
            .filter((key) => this.metabolites[key] > 0)
            .map((key) => this.reactants[key] = this.metabolites[key]);
        Object.keys(this.metabolites)
            .filter((key) => this.metabolites[key] < 0)
            .map((key) => this.products[key] = Math.abs(this.metabolites[key]));
    }
}
