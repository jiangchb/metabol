import {Component, Input, OnChanges} from 'angular2/core';
import {KeysPipe} from '../../../pipes/keys.pipe';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'chemical-equation',
    pipes: [KeysPipe],
    directives:[ROUTER_DIRECTIVES],
    template: `
    <ul>

      <li *ngFor="let key of reactants|Keys;  let count = index">
          {{(0!=count) ? "+" : ""}}
        <a [routerLink]="['MetaboliteDetails',{metaboliteId: key}]">
          {{(reactants[key]>1) ? reactants[key] : ""}}{{key}}
        </a>
      </li>
      →
      <li *ngFor="let key of products|Keys let count = index">
          {{(0!=count) ? "+" : ""}}
        <a [routerLink]="['MetaboliteDetails',{metaboliteId: key}]">
          {{(products[key]>1) ? reactants[key] : ""}}{{key}}
        </a>
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
    metabolites: any[];
    reactants = {};
    products = {};

    ngOnChanges() {
        this.metabolites.filter((key) => key.stoichiometry > 0)
            .map((key) => this.reactants[key.id] = key.stoichiometry);
        this.metabolites.filter((key) => key.stoichiometry < 0)
            .map((key) => this.products[key.id] = Math.abs(key.stoichiometry));

    }
}
