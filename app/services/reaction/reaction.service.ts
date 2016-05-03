import {Injectable} from 'angular2/core';
import {Reaction} from './reaction';

@Injectable()
export class ReactionService {
    getReaction() {
        return REACTION
    }
}

var REACTION: Reaction =
    {
        "name": "glyceraldehyde-3-phosphate dehydrogenase",
        "upper_bound": 1000.0,
        "lower_bound": -1000.0,
        "id": "GAPD",
        "metabolites": {
            "pi_c": -1.0,
            "nad_c": -1.0,
            "g3p_c": -1.0,
            "h_c": 1.0,
            "13dpg_c": 1.0,
            "nadh_c": 1.0
        },
        "annotation": { "bigg.reaction": "GAPD" },
        "gene_reaction_rule": "b1779"
    };
