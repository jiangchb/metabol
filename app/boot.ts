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
