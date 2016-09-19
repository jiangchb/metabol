import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AccordionComponent, LoadingComponent} from './components';
import {LoadingService, CurrencyMetabolitesService} from './services';
import {KeysPipe} from './pipes';


@NgModule({
    declarations: [
        AccordionComponent,
        LoadingComponent,
        KeysPipe,
    ],
    imports: [
        BrowserModule,
        HttpModule,
    ],
    providers: [
        LoadingService,
        CurrencyMetabolitesService
    ],
    exports: [
        AccordionComponent,
        LoadingComponent,
        KeysPipe
    ]
})
export class MetabolCommonModule { }
