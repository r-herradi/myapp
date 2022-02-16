"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getServerSideProps = void 0;
var layout_1 = require("@chakra-ui/layout");
var react_1 = require("@chakra-ui/react");
var gradientLayout_1 = require("../components/gradientLayout");
var hooks_1 = require("../lib/hooks");
var prisma_1 = require("../lib/prisma");
var Home = function (_a) {
    var artists = _a.artists;
    var _b = hooks_1.useMe(), user = _b.user, isLoading = _b.isLoading, isError = _b.isError;
    //Add skeleton item while isLoading, that would look seriously cool
    //Add Error state while isError, that would look seriously cool
    return (React.createElement(gradientLayout_1["default"], { roundImage: true, color: "gray", subtitle: "Profile", title: (user === null || user === void 0 ? void 0 : user.firstName) + " " + (user === null || user === void 0 ? void 0 : user.lastName), description: (user === null || user === void 0 ? void 0 : user.playlistsCount) + " Public Playlists", image: "https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0" },
        React.createElement(layout_1.Box, { color: "white", paddingX: "40px" },
            React.createElement(layout_1.Box, { marginBottom: "40px" },
                React.createElement(layout_1.Text, { fontSize: "2xl", fontWeight: "bold" }, "Top artist this month"),
                React.createElement(layout_1.Text, { fontSize: "md" }, "Only visible to you")),
            React.createElement(layout_1.Flex, null, artists.map(function (artist) { return (React.createElement(layout_1.Box, { paddingX: "20px", width: "20%" },
                React.createElement(layout_1.Box, { bg: "gray.900", borderRadius: "4px", padding: "15px", width: "100%" },
                    React.createElement(react_1.Image, { src: "http://placekitten.com/300/300", borderRadius: "100%" }),
                    React.createElement(layout_1.Box, { marginTop: "20px" },
                        React.createElement(layout_1.Text, { fontSize: "large", fontWeight: "bold" }, artist.name),
                        React.createElement(layout_1.Text, { fontSize: "x-small" }, "Artist"))))); })))));
};
exports.getServerSideProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var artists;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1["default"].artist.findMany({})];
            case 1:
                artists = _a.sent();
                return [2 /*return*/, {
                        props: { artists: artists }
                    }];
        }
    });
}); };
exports["default"] = Home;
