"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Point = function (_a) {
    var index = _a.index, pointSize = _a.pointSize, pointActiveSize = _a.pointActiveSize, size = _a.size, selected = _a.selected, pop = _a.pop;
    var percentPerItem = 100 / size;
    return (React.createElement("div", { className: "react-pattern-lock__point-wrapper".concat(selected ? " selected" : ""), style: {
            width: "".concat(percentPerItem, "%"),
            height: "".concat(percentPerItem, "%"),
            flex: "1 0 ".concat(percentPerItem, "%")
        }, "data-index": index },
        React.createElement("div", { className: "react-pattern-lock__point", style: {
                width: pointActiveSize,
                height: pointActiveSize
            } },
            React.createElement("div", { className: "react-pattern-lock__point-inner".concat(pop ? " active" : ""), style: {
                    minWidth: pointSize,
                    minHeight: pointSize
                } }))));
};
exports.default = Point;
//# sourceMappingURL=Point.js.map