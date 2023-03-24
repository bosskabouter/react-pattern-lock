import * as React from "react";
import { getAngle, getDistance, getConnectorPoint } from "../utils";
var Connectors = function (_a) {
    var path = _a.path, points = _a.points, wrapperPosition = _a.wrapperPosition, pointActiveSize = _a.pointActiveSize, connectorThickness = _a.connectorThickness, connectorRoundedCorners = _a.connectorRoundedCorners, initialMousePosition = _a.initialMousePosition;
    var _b = React.useState(null), mouse = _b[0], setMouse = _b[1];
    React.useEffect(function () { return setMouse(initialMousePosition); }, [initialMousePosition]);
    var _c = React.useMemo(function () { return ({
        setMousePosition: function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            return setMouse({ x: clientX - wrapperPosition.x + window.scrollX, y: clientY - wrapperPosition.y + window.scrollY });
        },
        setTouchPosition: function (_a) {
            var touches = _a.touches;
            return setMouse({ x: touches[0].clientX - wrapperPosition.x + window.scrollX, y: touches[0].clientY - wrapperPosition.y + window.scrollY });
        }
    }); }, [wrapperPosition]), setMousePosition = _c.setMousePosition, setTouchPosition = _c.setTouchPosition;
    React.useEffect(function () {
        if (!initialMousePosition)
            return;
        window.addEventListener("mousemove", setMousePosition);
        window.addEventListener("touchmove", setTouchPosition);
        return function () {
            window.removeEventListener("mousemove", setMousePosition);
            window.removeEventListener("touchmove", setTouchPosition);
        };
    });
    var connectors = [];
    for (var i = 0; i < path.length - 1; i += 1) {
        var current = points[path[i]];
        var next = points[path[i + 1]];
        connectors.push({
            from: getConnectorPoint(current, pointActiveSize, connectorThickness),
            to: getConnectorPoint(next, pointActiveSize, connectorThickness)
        });
    }
    if (mouse && path.length) {
        connectors.push({
            from: getConnectorPoint(points[path[path.length - 1]], pointActiveSize, connectorThickness),
            to: mouse
        });
    }
    return (React.createElement("div", { className: "react-pattern-lock__connector-wrapper" }, connectors.map(function (_a, i) {
        var from = _a.from, to = _a.to;
        return (React.createElement("div", { className: "react-pattern-lock__connector", key: i, style: {
                transform: "rotate(".concat(getAngle(from, to), "rad)"),
                width: "".concat(getDistance(from, to), "px"),
                left: "".concat(from.x, "px"),
                top: "".concat(from.y, "px"),
                height: connectorThickness,
                borderRadius: connectorRoundedCorners ? Math.round(connectorThickness / 2) : 0
            } }));
    })));
};
export default Connectors;
//# sourceMappingURL=Connectors.js.map