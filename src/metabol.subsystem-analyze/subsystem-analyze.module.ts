import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  ConcentrationTableComponent,
  ManualComponent,
  MeasurementComponent,
  UploadComponent,
  SampleComponent,
  SubsystemAnalyzeComponent,

} from './components';

import {subsystemAnalyzeRoutingProviders, subsystemAnalyzeRouting} from './subsystem-analyze.routes';

import {MetabolCommonModule} from '../metabol.common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    subsystemAnalyzeRouting,
    MetabolCommonModule
  ],
  providers: [subsystemAnalyzeRoutingProviders],
  declarations: [
    ConcentrationTableComponent,
    ManualComponent,
    MeasurementComponent,
    UploadComponent,
    SampleComponent,
    SubsystemAnalyzeComponent
  ],
  exports:[

  ]
})
export class SubsystemAnalyzeModule { }
