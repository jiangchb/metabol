export class Metabolite {
    name: string;
    id: string;
    charge: number;
    formula: string;
    compartment: string;
    annotation: { [key: string]: string[] | string };
}
