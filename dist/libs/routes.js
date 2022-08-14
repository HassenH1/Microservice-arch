"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ROUTES = [
    {
        url: "/auth",
        auth: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5,
        },
        proxy: {
            target: "http://localhost:3001",
            changeOrigin: true,
            pathRewrite: {
                [`^/auth`]: "",
            },
        },
    },
    {
        url: "/premium",
        auth: true,
        proxy: {
            target: "http://localhost:3002/",
            changeOrigin: true,
            pathRewrite: {
                [`^/premium`]: "",
            },
        },
    },
];
exports.ROUTES = ROUTES;
