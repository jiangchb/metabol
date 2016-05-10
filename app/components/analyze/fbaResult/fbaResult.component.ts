import {Component} from 'angular2/core';
import {FbaService} from '../../../services/fba/fba.service';
import {FbaIteration, FbaNode, FbaLink} from '../../../services/fba/fbaiteration';
import {VisualizationComponent} from '../../visualization/visualization.component';

@Component({
    selector: 'fba-result',
    templateUrl: '/app/components/analyze/fbaResult/fbaResult.html',
    directives: [VisualizationComponent]
})
export class FbaResultComponent {

    nodes:FbaNode[];
    links:FbaLink[];

    constructor(private fba: FbaService) {
        this.nodes = new Array<FbaNode>();
        this.links = new Array<FbaLink>();
    }

    analyze() {
        this.fba.getNextIteration(
            (data) => {
                this.nodes = this.nodes.concat(data.Nodes);
                this.links = this.links.concat(data.Links);
            });
    }
}
