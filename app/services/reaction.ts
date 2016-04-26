export class Reaction {
    id: string;
    name: string;
    annotation: { [key: string]: string };
    gene_reaction_rule: string
    lower_bound: number;
    upper_bound: number;
    metabolites: { [key: string]: number };
}
