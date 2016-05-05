import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {MetaboliteService} from '../../../services/metabolite/metabolite.service';
import {ChemicalEquationComponent} from '../chemicalEquation/chemicalEquation.component';
import {KeysPipe} from '../../../pipes/keys.pipe';

@Component({
    templateUrl: 'app/components/details/metaboliteDetails/metaboliteDetails.html',
    directives: [ROUTER_DIRECTIVES, ChemicalEquationComponent],
    pipes: [KeysPipe]
})

export class MetaboliteDetailsComponent implements OnInit {
    constructor(
        private _metaboliteService: MetaboliteService,
        private _routeParams: RouteParams
        ) { };

    metabolite: any = {};

    ngOnInit() {
        let metaboliteId = this._routeParams.get('metaboliteId');
        this.getMetabolite(metaboliteId)
    }

    private getMetabolite(metaboliteId) {
        this._metaboliteService.getMetabolite(metaboliteId).subscribe(
            data => this.metabolite = data
            )
    }

}
