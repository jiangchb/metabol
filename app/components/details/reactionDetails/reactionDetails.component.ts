import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MetaboliteService} from '../../../services/metabolite.service';
import {ReactionService} from '../../../services/reaction.service';
import {KeysValuesPipe} from '../../../pipes/keysValues.pipe';

@Component({
  templateUrl: 'app/components/details/reactionDetails/reactionDetails.html',
  directives:[ROUTER_DIRECTIVES],
  pipes: [KeysValuesPipe]
})

export class ReactionDetailsComponent {
  constructor(
    private _metaboliteService: MetaboliteService,
    private _reactionService: ReactionService
  ){};

  metabolite = this._metaboliteService.getMetabolite();
  reaction = this._reactionService.getReaction();
}
