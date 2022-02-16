"use strict";
exports.__esModule = true;
exports.usePlaylist = exports.useMe = void 0;
var swr_1 = require("swr");
var fetcher_1 = require("./fetcher");
exports.useMe = function () {
    var _a = swr_1["default"]("/me", fetcher_1["default"]), data = _a.data, error = _a.error;
    return {
        user: data,
        isLoading: !data && !error,
        isError: error
    };
};
exports.usePlaylist = function () {
    var _a = swr_1["default"]("/playlist", fetcher_1["default"]), data = _a.data, error = _a.error;
    return {
        playlists: data || [],
        isLoading: !data && !error,
        isError: error
    };
};
