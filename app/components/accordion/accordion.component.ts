import {Component, Input} from 'angular2/core';

@Component({
    selector: 'accordion',
    templateUrl: '/app/components/accordion/accordion.html'
})
export class Accordion {
    @Input() title: String;
    isBig: Boolean;

    toggle() {
        this.isBig = !this.isBig;
    }
}
