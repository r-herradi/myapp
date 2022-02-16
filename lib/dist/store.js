"use strict";
exports.__esModule = true;
exports.store = void 0;
var easy_peasy_1 = require("easy-peasy");
exports.store = easy_peasy_1.createStore({
    activeSongs: [],
    activeSong: null,
    changeActiveSongs: easy_peasy_1.action(function (state, payload) {
        state.activeSongs = payload;
    }),
    changeActiveSong: easy_peasy_1.action(function (state, payload) {
        state.activeSong = payload;
    })
});
