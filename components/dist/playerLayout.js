"use strict";
exports.__esModule = true;
var layout_1 = require("@chakra-ui/layout");
var playerBar_1 = require("./playerBar");
var sidebar_1 = require("./sidebar");
var PlayerLayout = function (_a) {
    var children = _a.children;
    return (React.createElement(layout_1.Box, { w: "100vw", h: "100vh" },
        React.createElement(layout_1.Box, { pos: "absolute", top: "0", w: "250px", left: "0" },
            React.createElement(sidebar_1["default"], null)),
        React.createElement(layout_1.Box, { marginLeft: "250px", marginBottom: "100px" },
            React.createElement(layout_1.Box, { h: "calc(100vh - 100px)" }, children)),
        React.createElement(layout_1.Box, { pos: "absolute", left: "0", bottom: "0", height: "100px" },
            React.createElement(playerBar_1["default"], null))));
};
exports["default"] = PlayerLayout;
