import * as d3 from 'd3';

export interface FbaIteration {
    id: Number;
    fba: Number;
    time: Number;
    Nodes: Array<FbaNode>;
    Links: Array<FbaLink>;
}

export interface FbaNode extends d3.layout.force.Node {
    id: number;
    name: string;
    type: string;
    index: number;
    isBorder?: Boolean;
    concentration?: Number;
    change?: String;
}

export interface FbaLink extends d3.layout.force.Link<FbaNode> {
    source: FbaNode;
    target: FbaNode;
    role: String;
}
