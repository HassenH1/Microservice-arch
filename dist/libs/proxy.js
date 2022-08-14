"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_proxy_middleware_1 = require("http-proxy-middleware");
const setupProxies = (app, routes) => {
    routes.forEach((r) => {
        app.use(r.url, (req, res, next) => {
            const func = (0, http_proxy_middleware_1.createProxyMiddleware)(r.proxy);
            func(req, res, next);
        });
    });
};
exports.setupProxies = setupProxies;
