import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AnalyzeService} from './services/analyze/analyze.service';
import {MetaboliteService} from './services/metabolite/metabolite.service';
import {ReactionService} from './services/reaction/reaction.service';
import {FbaService} from './services/fba/fba.service';


bootstrap(AppComponent, [
    ROUTER_PROVIDERS, HTTP_PROVIDERS, AnalyzeService,
    MetaboliteService, ReactionService, FbaService
]);

localStorage.setItem('token', 'bearer Xu-L0y8bxU_comOZuHEXy00fh4lIAiWphHuH2H6FoCo5B5dJizPnFQuqklrRTVlb4NJ6TYa5S9ebilvGs93K0_z3FvsX2F9OF8f2zCODNn4dtHEHLh2mvAiwrE8ScrrmyQNztUmSyTXwDUzqHNRTksKa3ubDReoTbcLeC4VcmXlPMmAQcIV-T_k-erZHoxY-FWj5hLLFt7guf6vAUUKTRCIA1sEayA17vG6fSL52EiNBN5NpaA1yAq-2UW25HyupFnfLzFMRJJcfUdHhChJAzYQABh3Rk4nYvoLTvGPGy011WmnShRBw0fsBJW8N24NSrpVWk1aCNfEotatFo8s3VFnAWGyoyeqzrPmTGcH-Yjg1XKvdg2Pqv-ZWp5TGWOvbwcPNcc8VH0PiZQiP4Lf8q2WkmZ_blNDIna-tuLQpg6Kh0qGW3ndyWkTkAhrztsc1lbuhWVD9eCDnQALDnDtfFy_XTKiqOB8qZ2cWmu9EmAw');
