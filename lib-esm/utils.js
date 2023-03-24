import { useRef, useEffect } from "react";
export var usePrevious = function (val) {
    var ref = useRef();
    useEffect(function () {
        ref.current = val;
    }, [val]);
    return ref.current;
};
export var getPoints = function (_a) {
    var pointActiveSize = _a.pointActiveSize, height = _a.height, size = _a.size;
    var halfSize = pointActiveSize / 2;
    var sizePerItem = height / size;
    var halfSizePerItem = sizePerItem / 2;
    return Array.from({ length: Math.pow(size, 2) }).map(function (x, i) { return ({
        x: ((sizePerItem * (i % size)) + halfSizePerItem) - halfSize,
        y: ((sizePerItem * Math.floor(i / size)) + halfSizePerItem) - halfSize
    }); });
};
export var getDistance = function (p1, p2) { return Math.sqrt((Math.pow((p2.x - p1.x), 2)) + (Math.pow((p2.y - p1.y), 2))); };
export var getAngle = function (p1, p2) { return Math.atan2(p2.y - p1.y, p2.x - p1.x); };
export var getCollidedPointIndex = function (_a, points, pointActiveSize) {
    var x = _a.x, y = _a.y;
    for (var i = 0; i < points.length; i += 1) {
        if (x > points[i].x
            && x < points[i].x + pointActiveSize
            && y > points[i].y
            && y < points[i].y + pointActiveSize)
            return i;
    }
    return -1;
};
export var getConnectorPoint = function (p, pointActiveSize, connectorThickness) { return ({
    x: p.x + Math.floor(pointActiveSize / 2),
    y: p.y + Math.floor(pointActiveSize / 2) - Math.floor(connectorThickness / 2)
}); };
export var exclusiveRange = function (rawStart, stop) {
    if (rawStart === stop)
        return [];
    var start = rawStart > stop ? rawStart - 1 : rawStart + 1;
    var step = start > stop ? -1 : 1;
    return Array.from({ length: Math.abs(start - stop) })
        .map(function (_, i) { return start + i * step; });
};
export var getPointsInTheMiddle = function (index1, index2, size) {
    var x1 = index1 % size;
    var x2 = index2 % size;
    var y1 = Math.floor(index1 / size);
    var y2 = Math.floor(index2 / size);
    var deltaX = Math.abs(x1 - x2);
    var deltaY = Math.abs(y1 - y2);
    if (y1 === y2) {
        return exclusiveRange(size * y1 + x1, size * y2 + x2);
    }
    else if (x1 === x2) {
        return exclusiveRange(y1, y2).map(function (x) { return x * size + x1; });
    }
    else if (deltaX === deltaY) {
        var m_1 = x1 < x2 ? 1 : -1;
        return exclusiveRange(y1, y2).map(function (x, i) { return x * size + x1 + ((i + 1) * m_1); });
    }
    return [];
};
//# sourceMappingURL=utils.js.map