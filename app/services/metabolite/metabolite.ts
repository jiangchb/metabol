export class Metabolite {
    id: string;
    name: string;
    compartment: string;
    initialAmount: number;
    charge: number;
    model: string;
    species_type: string;
    annotation: string;
    sboTerm: string;
    notes: string;
    participated_reactions: any[];
}
