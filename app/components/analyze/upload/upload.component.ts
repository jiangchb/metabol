import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {ConcentrationTableComponent} from '../concentrationTable/concentrationTable.component';
import {MetaboliteConcentration} from '../../../services/analyze/analyze.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FbaService} from '../../../services/fba/fba.service';

@Component({
    selector: 'upload-measurement',
    templateUrl: '/app/components/analyze/upload/upload.html',
    directives: [ConcentrationTableComponent, ROUTER_DIRECTIVES]
})
export class UploadComponent {
    conTable: Array<MetaboliteConcentration>;
    file: any;

    constructor(fb: FormBuilder, private fba: FbaService) {
        this.conTable = new Array<MetaboliteConcentration>();
    }

    jsonChange($event) {
        this.readJson($event.target);
    }

    readJson(inputValue: any) {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();
        myReader.onload = (e: any) =>
            this.conTable = JSON.parse(e.target.result);
        myReader.readAsText(file);
    }

    csvChange($event) {
        this.readCsv($event.target);
    }

    readCsv(inputValue: any) {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();
        myReader.onload = (e: any) => {
            let lines = e.target.result.split("\n");
            for (let i of lines) {
                let c = i.split(',');
                this.conTable.push({
                    name: c[0],
                    change: c[1],
                    exactValue: c[2]
                });
            }
        }
        myReader.readAsText(file);
    }

    analyze() {
        console.log(this.conTable);
        this.fba.startFbaWithData(this.conTable);
    }
}
