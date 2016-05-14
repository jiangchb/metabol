import { Directive, ElementRef, Input, OnInit, Renderer } from 'angular2/core';
import * as d3 from 'd3';

@Directive({
    selector: '[mtzoomable]',
    host: {
        "[attr.transform]": "'translate('+ translate +')scale('+ scale +')'"
    }
})
export class ZoomableDirective implements OnInit {
    value: string;
    zoom: d3.behavior.Zoom<any>;
    translate: Array<number>;
    scale: number;

    constructor(private el: ElementRef) {
        this.translate = [1, 1];
        this.scale = 1;
    }

    ngOnInit() {
        this.zoom = d3.behavior.zoom()
            .scaleExtent([0.1, 10])
            .on('zoom', () => this.onZoom());

        d3.select(this.el.nativeElement).call(this.zoom);
    }

    onZoom() {
        this.scale = this.zoom.scale();
        this.translate = this.zoom.translate();
    }
}
