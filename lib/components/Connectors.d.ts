import * as React from "react";
import { Point } from "../types";
interface ConnectorsProps {
    path: number[];
    connectorThickness: number;
    connectorRoundedCorners: boolean;
    pointActiveSize: number;
    points: Point[];
    wrapperPosition: Point;
    initialMousePosition: Point | null;
}
declare const Connectors: React.FunctionComponent<ConnectorsProps>;
export default Connectors;
