import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'reaction-detail',
  templateUrl: 'app/components/details/reactionDetails/reactionDetails.html',
  styleUrls:['app/components/details/reactionDetails/reactionDetails.css'],
  directives:[ROUTER_DIRECTIVES],
})

export class ReactionDetailsComponent { }
