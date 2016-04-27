import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MetaboliteService} from '../../../services/metabolite/metabolite.service';
import {ReactionService} from '../../../services/reaction/reaction.service';
import {ChemicalEquationComponent} from '../chemicalEquation/chemicalEquation.component';
import {KeysPipe} from '../../../pipes/keys.pipe';

@Component({
  templateUrl: 'app/components/details/reactionDetails/reactionDetails.html',
  directives:[ROUTER_DIRECTIVES, ChemicalEquationComponent],
  pipes: [KeysPipe]
})

export class ReactionDetailsComponent {
  constructor(
    private _metaboliteService: MetaboliteService,
    private _reactionService: ReactionService
  ){};

  metabolite = this._metaboliteService.getMetabolite();
  reaction = this._reactionService.getReaction();
}
