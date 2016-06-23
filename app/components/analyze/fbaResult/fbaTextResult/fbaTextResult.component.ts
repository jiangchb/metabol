import {Component, Input} from 'angular2/core';
import {Accordion} from '../../../accordion/accordion.component';

@Component({
    selector: 'fba-text-result',
    templateUrl: '/app/components/analyze/fbaResult/fbaTextResult/fbaTextResult.html',
    directives: [Accordion]
})
export class FbaTextResult {
    @Input() title: String;
    // TODO: update api
    @Input() textResult: Array<any>;

    titleGenerater(index) {
        console.log('a');
        let iteration = this.textResult[index];
        let title = 'Iteration ' + (this.textResult.length - index)
            + ' (Expanded Metabolite: ' + '' + ')'
            + ' (Added ' + iteration.newMetaboliteCount + ' metabolites, '
            + iteration.newReactionCount + ' reactions)';

        return title;
    }
}
