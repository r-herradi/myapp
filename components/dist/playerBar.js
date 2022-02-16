"use strict";
exports.__esModule = true;
var layout_1 = require("@chakra-ui/layout");
var easy_peasy_1 = require("easy-peasy");
var player_1 = require("./player");
var PlayerBar = function () {
    var songs = easy_peasy_1.useStoreState(function (state) { return state.activeSongs; });
    var activeSong = easy_peasy_1.useStoreState(function (state) { return state.activeSong; });
    return (React.createElement(layout_1.Box, { h: "100px", w: "100vw", bg: "gray.900", p: "10px" },
        React.createElement(layout_1.Flex, { align: "center" },
            activeSong ? (React.createElement(layout_1.Box, { p: "20px", color: "white", w: "30%" },
                React.createElement(layout_1.Text, { fontSize: "large" }, activeSong.name),
                React.createElement(layout_1.Text, { fontSize: "xs" }, activeSong.artist.name))) : null,
            React.createElement(layout_1.Box, { w: "40%" }, activeSong ? React.createElement(player_1["default"], { songs: songs, activeSong: activeSong }) : null),
            React.createElement(layout_1.Box, { w: "30%" }, "controls"))));
};
exports["default"] = PlayerBar;
