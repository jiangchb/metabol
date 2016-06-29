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
        this.check();
    };

    ngOnInit() {
        let reactionId = this.route.get('reactionId');

        this.rea.getReaction(reactionId)
            .subscribe(data => this.reaction = data);

        this.rea.getRelatedMetabolites(reactionId)
            .subscribe(data => this.relatedMetabolites = data['metabolites']);



    }

    check() { //If array is empty run again to fill it
        let reactionId = this.route.get('reactionId');
        if (this.reaction.id == null || this.relatedMetabolites.length == 0)
            this.rea.getRelatedMetabolites(reactionId)
                .subscribe(data => this.relatedMetabolites = data['metabolites']);

        this.rea.getReaction(reactionId)
            .subscribe(data => this.reaction = data);





    }
}
