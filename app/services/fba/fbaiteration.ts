import * as d3 from 'd3';

export interface FbaIteration {
    id: number;
    fba: number;
    time: number;
    Nodes: Array<FbaNode>;
    Links: Array<FbaLink>;
}

export interface FbaNode extends d3.layout.force.Node {
    id: number;
    name: string;
    type: string;
    index: number;
    isBorder?: boolean;
    concentration?: number;
    change?: string;
    color?:string;
    iteration?:number;
}

export interface FbaLink extends d3.layout.force.Link<FbaNode> {
    source: FbaNode;
    target: FbaNode;
    role: string;
}
