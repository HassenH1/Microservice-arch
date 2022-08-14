import { Express, Request, Response, NextFunction } from "express";
import { Routes } from "./types";
import { createProxyMiddleware } from "http-proxy-middleware";

const setupProxies = (app: Express, routes: Routes[]) => {
  routes.forEach((r: Routes) => {
    app.use(r.url, (req: Request, res: Response, next: NextFunction) => {
      const func = createProxyMiddleware(r.proxy);
      func(req, res, next);
    });
  });
};

exports.setupProxies = setupProxies;
