"use strict";
exports.__esModule = true;
exports.formatDate = exports.formatTime = void 0;
var format_duration_1 = require("format-duration");
exports.formatTime = function (timeInSeconds) {
    if (timeInSeconds === void 0) { timeInSeconds = 0; }
    return format_duration_1["default"](timeInSeconds * 1000);
};
exports.formatDate = function (date) {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
};
