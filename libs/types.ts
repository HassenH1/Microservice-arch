//////////////////ROUTES
export interface Routes {
  url: string;
  auth: boolean;
  rateLimit?: RateLimit;
  proxy: Proxy;
}

interface Proxy {
  target: string;
  changeOrigin: boolean;
  pathRewrite: PathRewrite;
}

interface PathRewrite {
  [key: string]: string;
}

interface RateLimit {
  windowMs: number;
  max: number;
}
