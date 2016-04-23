import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MetaboliteService} from '../../../services/metabolite.service';
import {ReactionService} from '../../../services/reaction.service';
import {KeysValuesPipe} from '../../../pipes/keysValues.pipe';

@Component({
  templateUrl: 'app/components/details/metaboliteDetails/metaboliteDetails.html',
  directives:[ROUTER_DIRECTIVES],
  pipes: [KeysValuesPipe]
})

export class MetaboliteDetailsComponent {
  constructor(
    private _metaboliteService: MetaboliteService,
    private _reactionService: ReactionService
  ){};

  metabolite = this._metaboliteService.getMetabolite();
  reaction = this._reactionService.getReaction();

}
