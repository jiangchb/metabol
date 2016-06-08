import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'full-screenable-svg',
    template: `
    <svg [class.small-size]="!isFullScreen" [class.full-screen]="isFullScreen">
      <ng-content></ng-content>
    </svg>

    <button id="resize-full" class="btn btn-default" (click)="toggleFullScreen()"
      [style.position]="isFullScreen ? 'fixed' :'absolute'">
      <span *ngIf="!isFullScreen" class="glyphicon glyphicon-resize-full"
        aria-hidden="true"> </span>
      <span *ngIf="isFullScreen" class="glyphicon glyphicon-resize-small"
        aria-hidden="true"> </span>
    </button>
    `,
    styleUrls: ['app/components/fullScreenableSvg/fullScreenableSvg.css']

})
export class FullScreenableSvgComponent {

    @Input() isFullScreen: Boolean;
    @Output() isFullScreenChange: EventEmitter<Boolean>;

    constructor() {
        this.isFullScreen = this.isFullScreen || false;
        this.isFullScreenChange = new EventEmitter<Boolean>();
    }

    toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen;
        this.isFullScreenChange.emit(this.isFullScreen);
    }
}
