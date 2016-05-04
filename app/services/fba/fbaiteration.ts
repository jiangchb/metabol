export interface FbaIteration {
    id: Number;
    fba: Number;
    time: Number;
    nodes: Array<FbaNode>;
    links: Array<FbaLink>;
}

interface FbaNode {
    id: Number;
    name: String;
    type: String;
    isBorder: Boolean;
    concentration: Number;
    change: String;
}

interface FbaLink {
    source: Number;
    target: Number;
    role: String;
}
