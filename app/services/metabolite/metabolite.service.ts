import {Metabolite} from './metabolite';
import {Injectable} from 'angular2/core';

@Injectable()
export class MetaboliteService {
    getMetabolite() {
      return METABOLITE
    }
}

var METABOLITE: Metabolite =
    {
        "name": "3-Phospho-D-glyceroyl phosphate",
        "id": "13dpg_c",
        "charge": -4,
        "formula": "C3H4O10P2",
        "compartment": "c",
        "annotation": {
            "unipathway.compound": "UPC00236",
            "biocyc": "DPG",
            "bigg.metabolite": "13dpg",
            "seed.compound": "cpd00203",
            "kegg.compound": "C00236",
            "hmdb": "HMDB01270",
            "reactome": "REACT_29800",
            "chebi": [ "CHEBI:16001", "CHEBI:1658", "CHEBI:20189", "CHEBI:57604", "CHEBI:11881" ],
            "pubchem.substance": "3535"
        }
    }
