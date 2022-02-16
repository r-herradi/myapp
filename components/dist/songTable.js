"use strict";
exports.__esModule = true;
var layout_1 = require("@chakra-ui/layout");
var react_1 = require("@chakra-ui/react");
var bs_1 = require("react-icons/bs");
var ai_1 = require("react-icons/ai");
var formatters_1 = require("../lib/formatters");
var easy_peasy_1 = require("easy-peasy");
var SongTable = function (_a) {
    var songs = _a.songs;
    var playSongs = easy_peasy_1.useStoreActions(function (store) { return store.changeActiveSongs; });
    var setActiveSong = easy_peasy_1.useStoreActions(function (store) { return store.changeActiveSong; });
    var handlePlay = function (activeSong) {
        setActiveSong(activeSong || songs[0]);
        playSongs(songs);
    };
    return (React.createElement(layout_1.Box, { bg: "transparent", color: "white" },
        React.createElement(layout_1.Box, { padding: "5px", marginBottom: "20px" },
            React.createElement(layout_1.Box, { mb: "30px" },
                React.createElement(react_1.IconButton, { icon: React.createElement(bs_1.BsFillPlayFill, { fontSize: "30px" }), colorScheme: "green", size: "lg", isRound: true, "aria-label": "play", onClick: function () { return handlePlay(); } })),
            React.createElement(react_1.Table, { variant: "unstyled" },
                React.createElement(react_1.Thead, { borderBottom: "1px solid", borderColor: "rgb(255, 255, 255, 0.2)" },
                    React.createElement(react_1.Tr, null,
                        React.createElement(react_1.Th, null, "#"),
                        React.createElement(react_1.Th, null, "Title"),
                        React.createElement(react_1.Th, null, "Date Added"),
                        React.createElement(react_1.Th, null,
                            React.createElement(ai_1.AiOutlineClockCircle, null)))),
                React.createElement(react_1.Tbody, null, songs.map(function (song, i) {
                    return (React.createElement(react_1.Tr, { sx: {
                            transition: "all 0.3s",
                            "&:hover": { bg: "rgba(255, 255, 255, 0.1)" }
                        }, key: song.id, cursor: "pointer", onClick: function () { return handlePlay(song); } },
                        React.createElement(react_1.Td, null, i + 1),
                        React.createElement(react_1.Td, null, song.name),
                        React.createElement(react_1.Td, null, formatters_1.formatDate(song.createdAt)),
                        React.createElement(react_1.Td, null, formatters_1.formatTime(song.duration))));
                }))))));
};
exports["default"] = SongTable;
