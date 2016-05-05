import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {ReactionService} from '../../../services/reaction/reaction.service';
import {ChemicalEquationComponent} from '../chemicalEquation/chemicalEquation.component';
import {KeysPipe} from '../../../pipes/keys.pipe';

@Component({
    templateUrl: 'app/components/details/reactionDetails/reactionDetails.html',
    directives: [ROUTER_DIRECTIVES, ChemicalEquationComponent],
    pipes: [KeysPipe]
})

export class ReactionDetailsComponent implements OnInit {
    constructor(
        private _reactionService: ReactionService,
        private _routeParams: RouteParams
        ) { };

    reaction: any = {};

    ngOnInit() {
        let reactionId = this._routeParams.get('reactionId');
        this.getReaction(reactionId);
    }

    private getReaction(reactionId: string) {
        this._reactionService.getReaction(reactionId).subscribe(
            data => this.reaction = data
            )
    }
}
