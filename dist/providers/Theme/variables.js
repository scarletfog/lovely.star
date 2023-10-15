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
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = exports.themeVariables = exports.colors = exports.spacing = exports.borderRadius = exports.fontWeight = exports.fontSize = void 0;
exports.fontSize = {
    caption: "0.625rem",
    bodySmall: "0.75rem",
    body: "0.875rem",
    bigBoy: "1.5rem",
};
exports.fontWeight = {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
};
exports.borderRadius = {
    s: "0.625rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
};
exports.spacing = {
    s: "0.625rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
};
exports.colors = {
    violetDream: "#C9B1FF",
    pinkPuff: "#FFCAF2",
    melon: "#FFB2B1",
    bananaiceCream: "#FFF3AD",
    teaGreen: "#BCFFBC",
    blueWave: "#A2EDFF",
    darkerWave: "#174193",
    incident: "#ff0051",
    softBlack: "#0e1111",
    snowBall: "#fdfcf9",
    fluff: "#f1fcff",
};
exports.themeVariables = {
    transparent: "rgba(255,255,255,0)",
    spacing: exports.spacing,
    borderRadius: exports.borderRadius,
    fontSize: exports.fontSize,
    fontWeight: exports.fontWeight,
    colors: exports.colors,
};
exports.theme = __assign({}, exports.themeVariables);
