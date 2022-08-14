"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_proxy_middleware_1 = require("http-proxy-middleware");
const setupProxies = (app, routes) => {
    routes.forEach((r) => {
        app.use(r.url, function (req, res, next) {
            (0, http_proxy_middleware_1.createProxyMiddleware)(r.proxy)(req, res, next);
        });
        // app.use(r.url, (req,rest,next) => {
        //   createProxyMiddleware(r.proxy)
        // });
    });
};
exports.setupProxies = setupProxies;
