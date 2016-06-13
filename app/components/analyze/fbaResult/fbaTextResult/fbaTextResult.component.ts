import {Component, Input} from 'angular2/core';

@Component({
    selector: 'fba-text-result',
    templateUrl: '/app/components/analyze/fbaResult/fbaTextResult/fbaTextResult.html'
})
export class FbaTextResult {
    @Input() title: String;
    isBig: Boolean;

    toggle() {
        this.isBig = !this.isBig;
    }
}
