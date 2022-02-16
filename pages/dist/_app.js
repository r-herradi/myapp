"use strict";
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
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
require("reset-css");
var easy_peasy_1 = require("easy-peasy");
var store_1 = require("../lib/store");
var playerLayout_1 = require("../components/playerLayout");
var theme = react_1.extendTheme({
    colors: {
        gray: {
            100: "#F5F5F5",
            200: "#EEEEEE",
            300: "#E0E0E0",
            400: "#BDBDBD",
            500: "#9E9E9E",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            1000: "#181818",
            1100: "#121212"
        }
    },
    components: {
        Button: {
            variants: {
                link: {
                    ":focus": {
                        outline: "none",
                        boxShadow: "none"
                    }
                }
            }
        }
    }
});
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(react_1.ChakraProvider, { theme: theme },
        React.createElement(easy_peasy_1.StoreProvider, { store: store_1.store }, Component.authPage ? (React.createElement(Component, __assign({}, pageProps))) : (React.createElement(playerLayout_1["default"], null,
            React.createElement(Component, __assign({}, pageProps)))))));
}
exports["default"] = MyApp;
