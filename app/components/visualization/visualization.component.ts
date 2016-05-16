import {Component, Input, EventEmitter, Output, OnChanges, OnInit, ElementRef} from 'angular2/core';
import {FbaNode, FbaLink} from '../../services/fba/fbaiteration';
import * as d3 from 'd3';

@Component({
    selector: 'visualization',
    template: `
    <svg (window:resize)="onResize()"
         [class.small-size]="!isFullScreen"
         [class.full-screen]="isFullScreen">

      <g [attr.transform]="'translate('+ translate +')scale('+ scale +')'">

        <line class="link" *ngFor="#l of d3links"
          [attr.x1]="l.source.x"
          [attr.y1]="l.source.y"
          [attr.x2]="l.target.x"
          [attr.y2]="l.target.y"></line>

        <circle class="metabolite" r="10" *ngFor="#d of metabolites"
          [attr.cx]="d.x"
          [attr.cy]="d.y"
          [attr.fill]="d.color"></circle>

        <rect class="reaction" width="20" height="20" *ngFor="#d of reactions"
          [attr.x]="d.x - 10"
          [attr.y]="d.y - 10"
          [attr.fill]="d.color"></rect>

        <text class="text" *ngFor="#d of d3nodes"
          [attr.x]="d.x - 15"
          [attr.y]="d.y - 15">{{ d.name }}</text>
      </g>
    </svg>

    <button (click)="toggleFullScreen()" class="btn btn-default"
      id="resize-full" [style.position]="isFullScreen ? 'fixed' :'absolute'">
        <span *ngIf="!isFullScreen" class="glyphicon glyphicon-resize-full"
          aria-hidden="true"> </span>
        <span *ngIf="isFullScreen" class="glyphicon glyphicon-resize-small"
          aria-hidden="true"> </span>
    </button>
    `,
    styleUrls: ['app/components/visualization/visualization.css'],

})
export class VisualizationComponent implements OnChanges, OnInit {

    @Input() nodes: Array<FbaNode>;
    @Input() links: Array<FbaLink>;

    reactions: Array<FbaNode>;
    metabolites: Array<FbaNode>;

    force: d3.layout.Force<FbaLink, FbaNode>;
    d3links: Array<FbaLink>;
    d3nodes: Array<FbaNode>;
    zoom: d3.behavior.Zoom<any>;
    scale: number;
    translate: Array<number>;

    @Input() isFullScreen: Boolean;
    @Output() isFullScreenChange: EventEmitter<Boolean>;

    constructor(private elementRef: ElementRef) {
        this.isFullScreen = this.isFullScreen || false;
        this.scale = 1;
        this.translate = [1, 1];
        this.isFullScreenChange = new EventEmitter();

        this.force = d3.layout.force<FbaLink, FbaNode>()
            .linkDistance(25)
            .charge(-500)
            .size([1000, 400])
            .on('tick', () => {

            this.reactions = this.force.nodes().filter(
                (x) => x['type'] == 'r');
            this.metabolites = this.force.nodes().filter(
                (x) => x['type'] == 'm');

            this.d3links = this.force.links();
            this.d3nodes = this.force.nodes();
        });
    }


    ngOnInit() {
        this.zoom = d3.behavior.zoom()
            .scaleExtent([0.1, 10])
            .on('zoom', () => this.onZoom());
        d3.select(this.elementRef.nativeElement).select('svg')
            .call(this.zoom);
    }

    onZoom() {
        this.scale = this.zoom.scale();
        this.translate = this.zoom.translate();
    }

    getSizeOfSvg(): [number, number] {
        let sizes = document.getElementsByTagName("svg")[0].getBoundingClientRect();
        return [
            sizes.width,
            sizes.height
        ];
    }

    onResize() {
        this.force.size(this.getSizeOfSvg());
        this.force.start();
    }

    ngOnChanges() {
        this.force.stop();
        this.force.nodes(this.nodes).links(this.links);
        this.force.start();
    }

    toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen;
        this.isFullScreenChange.emit(this.isFullScreen);
    }
}
