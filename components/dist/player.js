"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var react_howler_1 = require("react-howler");
var react_2 = require("react");
var md_1 = require("react-icons/md");
var easy_peasy_1 = require("easy-peasy");
var formatters_1 = require("../lib/formatters");
var Player = function (_a) {
    var songs = _a.songs, activeSong = _a.activeSong;
    var _b = react_2.useState(true), playing = _b[0], setPlaying = _b[1];
    var _c = react_2.useState(songs.findIndex(function (s) { return s.id === activeSong.id; })), index = _c[0], setIndex = _c[1];
    var _d = react_2.useState(0.0), seek = _d[0], setSeek = _d[1];
    var _e = react_2.useState(false), isSeeking = _e[0], setIsSeeking = _e[1];
    var _f = react_2.useState(false), repeat = _f[0], setRepeat = _f[1];
    var _g = react_2.useState(false), shuffle = _g[0], setShuffle = _g[1];
    var _h = react_2.useState(0.0), duration = _h[0], setDuration = _h[1];
    var soundRef = react_2.useRef(null);
    var repeatRef = react_2.useRef(repeat);
    var setActiveSong = easy_peasy_1.useStoreActions(function (state) { return state.changeActiveSong; });
    react_2.useEffect(function () {
        var timerId;
        if (playing && !isSeeking) {
            var f_1 = function () {
                setSeek(soundRef.current.seek());
                timerId = requestAnimationFrame(f_1);
            };
            timerId = requestAnimationFrame(f_1);
            return function () { return cancelAnimationFrame(timerId); };
        }
        cancelAnimationFrame(timerId);
    }, [playing, isSeeking]);
    react_2.useEffect(function () {
        setActiveSong(songs[index]);
    }, [index, setActiveSong, songs]);
    react_2.useEffect(function () {
        repeatRef.current = repeat;
    }, [repeat]);
    var setPlayState = function (value) {
        setPlaying(value);
    };
    var onShuffle = function () {
        setShuffle(function (state) { return !state; });
    };
    var onRepeat = function () {
        setRepeat(function (state) { return !state; });
    };
    var prevSong = function () {
        setIndex(function (state) {
            return state ? state - 1 : songs.length - 1;
        });
    };
    var nextSong = function () {
        setIndex(function (state) {
            if (shuffle) {
                var next = Math.floor(Math.random() * songs.length);
                if (next === state) {
                    return nextSong();
                }
                return next;
            }
            return state === songs.length - 1 ? 0 : state + 1;
        });
    };
    var onEnd = function () {
        if (repeatRef.current) {
            setSeek(0);
            soundRef.current.seek(0);
        }
        else
            nextSong();
    };
    var onLoad = function () {
        var songDuration = soundRef.current.duration();
        setDuration(songDuration);
    };
    var onSeek = function (e) {
        setSeek(parseFloat(e[0]));
        soundRef.current.seek(e[0]);
    };
    return (React.createElement(react_1.Box, null,
        React.createElement(react_1.Box, null,
            React.createElement(react_howler_1["default"], { playing: playing, src: activeSong === null || activeSong === void 0 ? void 0 : activeSong.url, volume: 0.1, loop: repeat, ref: soundRef, onLoad: onLoad, onEnd: onEnd })),
        React.createElement(react_1.Center, null,
            React.createElement(react_1.ButtonGroup, null,
                React.createElement(react_1.IconButton, { outline: "none", variant: "link", "aria-label": "shuffle", fontSize: "24px", color: shuffle ? "white" : "gray.600", icon: React.createElement(md_1.MdShuffle, null), onClick: onShuffle }),
                React.createElement(react_1.IconButton, { outline: "none", variant: "link", "aria-label": "previous", fontSize: "24px", icon: React.createElement(md_1.MdSkipPrevious, null), onClick: prevSong }),
                playing ? (React.createElement(react_1.IconButton, { outline: "none", variant: "link", "aria-label": "play", fontSize: "40px", color: "white", icon: React.createElement(md_1.MdOutlinePauseCircleFilled, null), onClick: function () { return setPlayState(false); } })) : (React.createElement(react_1.IconButton, { outline: "none", variant: "link", "aria-label": "play", fontSize: "40px", color: "white", icon: React.createElement(md_1.MdOutlinePlayCircleFilled, null), onClick: function () { return setPlayState(true); } })),
                React.createElement(react_1.IconButton, { outline: "none", variant: "link", "aria-label": "next", fontSize: "24px", icon: React.createElement(md_1.MdSkipNext, null), onClick: nextSong }),
                React.createElement(react_1.IconButton, { outline: "none", variant: "link", "aria-label": "next", fontSize: "24px", color: repeat ? "white" : "gray.600", icon: React.createElement(md_1.MdOutlineRepeat, null), onClick: onRepeat }))),
        React.createElement(react_1.Box, { color: "gray.600" },
            React.createElement(react_1.Flex, { justify: "center", align: "center" },
                React.createElement(react_1.Box, { width: "10%" },
                    React.createElement(react_1.Text, { fontSize: "xs" }, formatters_1.formatTime(seek))),
                React.createElement(react_1.Box, { width: "80%" },
                    React.createElement(react_1.RangeSlider, { "aria-label": ["min", "max"], step: 0.1, min: 0, id: "player-range", max: duration ? duration.toFixed(2) : 0, onChange: onSeek, value: [seek], onChangeStart: function () { return setIsSeeking(true); }, onChangeEnd: function () { return setIsSeeking(false); } },
                        React.createElement(react_1.RangeSliderTrack, { bg: "gray.800" },
                            React.createElement(react_1.RangeSliderFilledTrack, { bg: "gray.600" })),
                        React.createElement(react_1.RangeSliderThumb, { index: 0 }))),
                React.createElement(react_1.Box, { width: "10%", textAlign: "right" },
                    React.createElement(react_1.Text, { fontSize: "xs" }, formatters_1.formatTime(duration)))))));
};
exports["default"] = Player;
