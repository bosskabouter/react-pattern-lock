"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
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