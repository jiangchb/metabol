export class Reaction {
    id: string;
    name: string;
    reversible: boolean;
    model: string;
    annotation: string;
    sboTerm: string;
    notes: string;
    connected_metabolites: any[];
}
