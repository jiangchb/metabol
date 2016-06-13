import {Component} from 'angular2/core';
import {FbaService} from '../../../services/fba/fba.service';
import {FbaIteration, FbaNode, FbaLink} from '../../../services/fba/fbaiteration';
import {VisualizationComponent} from '../../visualization/visualization.component';
import * as colorization from '../../../modules/colorization';
import {RouteParams} from 'angular2/router';
import {IterationColorBox} from './iterationColorBox/iterationColorBox.component';
import {FbaTextResult} from './fbaTextResult/fbaTextResult.component';

@Component({
    selector: 'fba-result',
    templateUrl: '/app/components/analyze/fbaResult/fbaResult.html',
    styleUrls: ['app/components/analyze/fbaResult/fbaResult.css'],
    directives: [VisualizationComponent, IterationColorBox, FbaTextResult]
})
export class FbaResultComponent {

    nodes: FbaNode[];
    links: FbaLink[];
    colorize: colorization.IdenticalByHalf;
    isFullScreen: Boolean;
    currentIteration: number;
    colors: Array<String>;

    constructor(private fba: FbaService, params: RouteParams) {
        this.colorize = new colorization.IdenticalByHalf();
        this.nodes = new Array<FbaNode>();
        this.links = new Array<FbaLink>();
        this.colors = new Array<String>();
        this.fba.startFba(params.get('fbaKey'));
        this.currentIteration = 0;
    }

    next() {
        this.fba.getNextIteration(
            (data) => {
                let colorOfIteration = this.colorize.next();
                data.Nodes.forEach((x) => x.color = colorOfIteration);
                this.colors.push(colorOfIteration);

                this.currentIteration++;
                data.Nodes.forEach((x) => x.iteration = this.currentIteration);

                this.nodes = this.nodes.concat(data.Nodes);
                this.links = this.links.concat(data.Links);
            });
    }

    previous() {
        this.currentIteration--;
    }
}
