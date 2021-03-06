import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Http, URLSearchParams } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

import { AppSettings } from "../../../app";
import { LoginService } from "../../../metabol.auth/services";

declare var Plotly: any;


@Component({
  selector: 'app-compare-analysis',
  templateUrl: './compare-analysis.component.html',
  styleUrls: ['./compare-analysis.component.css']
})
export class CompareAnalysisComponent implements OnInit, AfterViewInit {

  constructor(
    private route: ActivatedRoute,
    private http: Http,
    private login: LoginService) { }

  options;

  analyses;
  visualization;

  ngOnInit() {
    this.route.params.subscribe((params) => {

      this.options = this.login.optionByAuthorization();
      this.options.params = new URLSearchParams();
      for (let k in params) this.options.params.set(k, params[k]);

      this.getAnalysesData(this.options);
    });
  }

  getAnalysesData(options) {
    let apiUrl = `${AppSettings.API_ENDPOINT}/analysis/set`;
    this.http.get(apiUrl, options)
      .map(res => res.json())
      .subscribe((data) => this.analyses = data);
  }

  getVisualizationData(options) {
    let apiUrl = `${AppSettings.API_ENDPOINT}/analysis/visualization`;
    this.http.get(apiUrl, options)
      .map(res => res.json())
      .subscribe((data) => {
        data.type = 'heatmap';
        let layout = { margin: { l: 300 }, height: 1500 };
        Plotly.plot('heatmap', [data], layout);
      });
  }

  ngAfterViewInit() {
    this.getVisualizationData(this.options);
  }

}
