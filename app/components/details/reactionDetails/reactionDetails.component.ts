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

    reaction: Reaction;
    relatedMetabolites: Array<any>;

    constructor(private rea: ReactionService, private route: RouteParams) {
        this.reaction = new Reaction();
        this.relatedMetabolites = new Array<any>();
    };

    ngOnInit() {
        let reactionId = this.route.get('reactionId');

        this.rea.getReaction(reactionId,
            (data) => this.reaction = data);

        this.rea.getRelatedMetabolites(reactionId,
            (data) => this.relatedMetabolites = data);
    }
}
