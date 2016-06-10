import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {ReactionService} from '../../../services/reaction/reaction.service';
import {ChemicalEquationComponent} from '../chemicalEquation/chemicalEquation.component';
import {KeysPipe} from '../../../pipes/keys.pipe';
import {Reaction} from '../../../services/reaction/reaction';

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

    reaction: Reaction;
    relatedMetabolites: any = {};
    relatedMetabolitesResolved: boolean = false;

    ngOnInit() {
        let reactionId = this._routeParams.get('reactionId');
        this.getReaction(reactionId);
        this.getRelatedMetabolites(reactionId);
    }

    getReaction(reactionId: string) {
        this._reactionService.getReaction(reactionId,
            (data) => this.reaction = data);
    }

    getRelatedMetabolites(reactionId: string) {
        this._reactionService.getRelatedMetabolites(reactionId).subscribe(
            data => this.relatedMetabolites = data
        )
        this.relatedMetabolitesResolved = true;

    }
}
