import {Component} from 'angular2/core';
import {FbaService} from '../../../services/fba/fba.service';
import {FbaIteration, FbaNode, FbaLink} from '../../../services/fba/fbaiteration';
import {VisualizationComponent} from '../../visualization/visualization.component';
import * as colorization from '../../../modules/colorization';

@Component({
    selector: 'fba-result',
    templateUrl: '/app/components/analyze/fbaResult/fbaResult.html',
    styleUrls: ['app/components/analyze/fbaResult/fbaResult.css'],
    directives: [VisualizationComponent]
})
export class FbaResultComponent {

    nodes: FbaNode[];
    links: FbaLink[];
    colorize: colorization.IdenticalByHalf;
    isFullScreen: Boolean;

    constructor(private fba: FbaService) {
        this.colorize = new colorization.IdenticalByHalf();
        this.nodes = new Array<FbaNode>();
        this.links = new Array<FbaLink>();
    }

    analyze() {
        this.fba.getNextIteration(
            (data) => {
                let colorOfIteration = this.colorize.next();
                data.Nodes.forEach((x) => x.color = colorOfIteration);
                this.nodes = this.nodes.concat(data.Nodes);
                this.links = this.links.concat(data.Links);
            });
    }
}
