import * as React from "react";
interface PatternLockProps {
    path: number[];
    width?: number | string;
    size?: number;
    pointActiveSize?: number;
    connectorThickness?: number;
    connectorRoundedCorners?: boolean;
    pointSize?: number;
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
    allowOverlapping?: boolean;
    allowJumping?: boolean;
    style?: React.CSSProperties;
    className?: string;
    noPop?: boolean;
    invisible?: boolean;
    onChange(path: number[]): void;
    onFinish(): void;
}
declare const PatternLock: React.FunctionComponent<PatternLockProps>;
export default PatternLock;
