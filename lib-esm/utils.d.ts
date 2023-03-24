import { Point } from "./types";
export declare const usePrevious: <T>(val: T) => T | undefined;
export declare const getPoints: ({ pointActiveSize, height, size }: {
    pointActiveSize: number;
    height: number;
    size: number;
}) => Point[];
export declare const getDistance: (p1: Point, p2: Point) => number;
export declare const getAngle: (p1: Point, p2: Point) => number;
export declare const getCollidedPointIndex: ({ x, y }: Point, points: Point[], pointActiveSize: number) => number;
export declare const getConnectorPoint: (p: Point, pointActiveSize: number, connectorThickness: number) => Point;
export declare const exclusiveRange: (rawStart: number, stop: number) => number[];
export declare const getPointsInTheMiddle: (index1: number, index2: number, size: number) => number[];
