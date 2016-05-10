import {Component, Input, EventEmitter, Output, OnChanges} from 'angular2/core';
import {FbaNode, FbaLink} from '../../services/fba/fbaiteration';
import * as d3 from 'd3';

@Component({
    selector: 'visualization',
    template: `
    <svg width="1000" height="800">
      <line class="link" *ngFor="#l of d3links"
        [attr.x1]="l.source.x"
        [attr.y1]="l.source.y"
        [attr.x2]="l.target.x"
        [attr.y2]="l.target.y">
      </line>

      <circle r="10" *ngFor="#d of metabolites"
        [attr.cx]="d.x"
        [attr.cy]="d.y"></circle>

      <rect width="20" height="20" *ngFor="#d of reactions"
        [attr.x]="d.x - 10"
        [attr.y]="d.y - 10"></rect>

      <text class="text" *ngFor="#d of d3nodes"
        [attr.x]="d.x - 15"
        [attr.y]="d.y - 15">{{ d.name }}</text>
    </svg>
    `,
    styles: [`
      .link {
        stroke: #777;
        stroke-width: 2px;
        }
      .text{
        fill="red";
      }
      `],

})
export class VisualizationComponent implements OnChanges {

    @Input() nodes: Array<FbaNode>;
    @Input() links: Array<FbaLink>;

    force: d3.layout.Force<FbaLink, FbaNode>;
    reactions: Array<FbaNode>;
    metabolites: Array<FbaNode>;
    d3links: Array<FbaLink>;
    d3nodes: Array<FbaNode>;

    constructor() {
        this.force = d3.layout.force<FbaLink, FbaNode>()
            .linkDistance(25)
            .charge(-500)
            .size([1000, 1000]);
    }

    ngOnChanges() {
        this.force.stop();

        this.force.nodes(this.nodes)
            .links(this.links);

        this.force.on('tick', () => {
            this.reactions = this.force.nodes().filter(
                (x) => x['type'] == 'r');

            this.metabolites = this.force.nodes().filter(
                (x) => x['type'] == 'm');

            this.d3links = this.force.links();
            this.d3nodes = this.force.nodes();
        });

        this.force.start();
    }
}
