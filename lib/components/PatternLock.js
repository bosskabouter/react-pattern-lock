"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var PropTypes = __importStar(require("prop-types"));
var styled_components_1 = require("styled-components");
var Point_1 = __importDefault(require("./Point"));
var Connectors_1 = __importDefault(require("./Connectors"));
var utils_1 = require("../utils");
var classnames_1 = __importDefault(require("classnames"));
var Styles = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    * {\n        user-select none\n    }\n\n    .react-pattern-lock__pattern-wrapper {\n        touch-action: none;\n        width: 100%;\n        display: flex;\n        flex-wrap: wrap;\n        position: relative;\n    }\n    .react-pattern-lock__connector-wrapper {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        pointer-events: none;\n    }\n    .react-pattern-lock__connector {\n        background: white;\n        position: absolute;\n        transform-origin: center left;\n    }\n    .react-pattern-lock__point-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .react-pattern-lock__point {\n        cursor pointer;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .react-pattern-lock__point-inner {\n        background: white;\n        border-radius: 50%;\n    }\n    .react-pattern-lock__point-inner.active {\n        animation: pop 300ms ease;\n    }\n    .react-pattern-lock__pattern-wrapper.disabled,\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__point {\n        cursor: not-allowed;\n    }\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__connector {\n        background: grey;\n    }\n\n    .react-pattern-lock__pattern-wrapper.success .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.success .react-pattern-lock__connector {\n        background: #00ff00;\n    }\n\n    .react-pattern-lock__pattern-wrapper.error .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.error .react-pattern-lock__connector {\n        background: red;\n    }\n\n    @keyframes pop {\n        from { transform scale(1); }\n        50% { transform scale(2); }\n        to { transform scale(1); }\n    }\n"], ["\n    * {\n        user-select none\n    }\n\n    .react-pattern-lock__pattern-wrapper {\n        touch-action: none;\n        width: 100%;\n        display: flex;\n        flex-wrap: wrap;\n        position: relative;\n    }\n    .react-pattern-lock__connector-wrapper {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        pointer-events: none;\n    }\n    .react-pattern-lock__connector {\n        background: white;\n        position: absolute;\n        transform-origin: center left;\n    }\n    .react-pattern-lock__point-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .react-pattern-lock__point {\n        cursor pointer;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .react-pattern-lock__point-inner {\n        background: white;\n        border-radius: 50%;\n    }\n    .react-pattern-lock__point-inner.active {\n        animation: pop 300ms ease;\n    }\n    .react-pattern-lock__pattern-wrapper.disabled,\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__point {\n        cursor: not-allowed;\n    }\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__connector {\n        background: grey;\n    }\n\n    .react-pattern-lock__pattern-wrapper.success .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.success .react-pattern-lock__connector {\n        background: #00ff00;\n    }\n\n    .react-pattern-lock__pattern-wrapper.error .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.error .react-pattern-lock__connector {\n        background: red;\n    }\n\n    @keyframes pop {\n        from { transform scale(1); }\n        50% { transform scale(2); }\n        to { transform scale(1); }\n    }\n"])));
var PatternLock = function (_a) {
    var _b = _a.width, width = _b === void 0 ? "100%" : _b, _c = _a.size, size = _c === void 0 ? 5 : _c, _d = _a.pointActiveSize, pointActiveSize = _d === void 0 ? 30 : _d, _e = _a.pointSize, pointSize = _e === void 0 ? 20 : _e, _f = _a.connectorThickness, connectorThickness = _f === void 0 ? 6 : _f, _g = _a.connectorRoundedCorners, connectorRoundedCorners = _g === void 0 ? false : _g, _h = _a.disabled, disabled = _h === void 0 ? false : _h, _j = _a.error, error = _j === void 0 ? false : _j, _k = _a.success, success = _k === void 0 ? false : _k, _l = _a.allowOverlapping, allowOverlapping = _l === void 0 ? false : _l, _m = _a.noPop, noPop = _m === void 0 ? false : _m, _o = _a.invisible, invisible = _o === void 0 ? false : _o, _p = _a.allowJumping, allowJumping = _p === void 0 ? false : _p, _q = _a.className, className = _q === void 0 ? "" : _q, _r = _a.style, style = _r === void 0 ? {} : _r, onChange = _a.onChange, onFinish = _a.onFinish, path = _a.path;
    var wrapperRef = React.useRef(document.createElement("div"));
    var _s = React.useState(0), height = _s[0], setHeight = _s[1];
    var _t = React.useState([]), points = _t[0], setPoints = _t[1];
    var _u = React.useState({ x: 0, y: 0 }), position = _u[0], setPosition = _u[1];
    var _v = React.useState(false), isMouseDown = _v[0], setIsMouseDown = _v[1];
    var _w = React.useState(null), initialMousePosition = _w[0], setInitialMousePosition = _w[1];
    var checkCollision = function (_a) {
        var x = _a.x, y = _a.y;
        var _b = wrapperRef.current.getBoundingClientRect(), top = _b.top, left = _b.left;
        var mouse = { x: x - left, y: y - top };
        var index = (0, utils_1.getCollidedPointIndex)(mouse, points, pointActiveSize);
        if (~index && path[path.length - 1] !== index) {
            if (allowOverlapping || path.indexOf(index) === -1) {
                if (allowJumping || !path.length) {
                    onChange(__spreadArray(__spreadArray([], path, true), [index], false));
                }
                else {
                    var pointsInTheMiddle = (0, utils_1.getPointsInTheMiddle)(path[path.length - 1], index, size);
                    if (allowOverlapping) {
                        onChange(__spreadArray(__spreadArray(__spreadArray([], path, true), pointsInTheMiddle, true), [index], false));
                    }
                    else {
                        onChange(__spreadArray(__spreadArray(__spreadArray([], path, true), pointsInTheMiddle.filter(function (point) { return path.indexOf(point) === -1; }), true), [
                            index,
                        ], false));
                    }
                }
            }
        }
    };
    var onResize = function () {
        var _a = wrapperRef.current.getBoundingClientRect(), top = _a.top, left = _a.left;
        setPosition({ x: left + window.scrollX, y: top + window.scrollY });
        return [top, left];
    };
    var onHold = function (_a) {
        var clientX = _a.clientX, clientY = _a.clientY;
        if (disabled)
            return;
        var _b = onResize(), top = _b[0], left = _b[1];
        setInitialMousePosition({ x: clientX - left, y: clientY - top });
        setIsMouseDown(true);
        checkCollision({ x: clientX, y: clientY });
    };
    var onTouch = function (_a) {
        var touches = _a.touches;
        if (disabled)
            return;
        var _b = onResize(), top = _b[0], left = _b[1];
        setInitialMousePosition({
            x: touches[0].clientX - left,
            y: touches[0].clientY - top,
        });
        setIsMouseDown(true);
        checkCollision({ x: touches[0].clientX, y: touches[0].clientY });
    };
    React.useEffect(function () {
        var ref = wrapperRef.current;
        if (!isMouseDown)
            return;
        var onMouseMove = function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            return checkCollision({ x: clientX, y: clientY });
        };
        var onTouchMove = function (_a) {
            var touches = _a.touches;
            return checkCollision({ x: touches[0].clientX, y: touches[0].clientY });
        };
        ref.addEventListener("mousemove", onMouseMove);
        ref.addEventListener("touchmove", onTouchMove);
        return function () {
            ref.removeEventListener("mousemove", onMouseMove);
            ref.removeEventListener("touchmove", onTouchMove);
        };
    });
    React.useEffect(function () { return setHeight(wrapperRef.current.offsetWidth); }, []);
    React.useEffect(function () {
        window.addEventListener("resize", onResize);
        return function () { return window.removeEventListener("resize", onResize); };
    }, []);
    React.useEffect(function () {
        var rafId = window.requestAnimationFrame(function () {
            setPoints((0, utils_1.getPoints)({ pointActiveSize: pointActiveSize, height: height, size: size }));
            onResize();
        });
        return function () { return window.cancelAnimationFrame(rafId); };
    }, [height, pointActiveSize, size]);
    React.useEffect(function () {
        var onRelease = function () {
            setIsMouseDown(false);
            setInitialMousePosition(null);
            if (!disabled && path.length)
                onFinish();
        };
        window.addEventListener("mouseup", onRelease);
        window.addEventListener("touchend", onRelease);
        return function () {
            window.removeEventListener("mouseup", onRelease);
            window.removeEventListener("touchend", onRelease);
        };
    }, [disabled, path, onFinish]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Styles, null),
        React.createElement("div", { className: (0, classnames_1.default)([
                "react-pattern-lock__pattern-wrapper",
                { error: error, success: success, disabled: disabled },
                className,
            ]), style: __assign(__assign({}, style), { width: width, height: height }), onMouseDown: onHold, onTouchStart: onTouch, ref: wrapperRef },
            Array.from({ length: Math.pow(size, 2) }).map(function (_, i) { return (React.createElement(Point_1.default, { key: i, index: i, size: size, pointSize: pointSize, pointActiveSize: pointActiveSize, pop: !noPop && isMouseDown && path[path.length - 1] === i, selected: path.indexOf(i) > -1 })); }),
            !invisible && points.length && (React.createElement(Connectors_1.default, { initialMousePosition: initialMousePosition, wrapperPosition: position, path: path, points: points, pointActiveSize: pointActiveSize, connectorRoundedCorners: connectorRoundedCorners, connectorThickness: connectorThickness })))));
};
PatternLock.propTypes = {
    path: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    size: PropTypes.number,
    pointActiveSize: PropTypes.number,
    connectorThickness: PropTypes.number,
    connectorRoundedCorners: PropTypes.bool,
    pointSize: PropTypes.number,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    success: PropTypes.bool,
    allowOverlapping: PropTypes.bool,
    allowJumping: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    noPop: PropTypes.bool,
    invisible: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired,
};
exports.default = PatternLock;
var templateObject_1;
//# sourceMappingURL=PatternLock.js.map