const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/gateway", {
      target: "https://m.maizuo.com",
      changeOrigin: true,
      logLevel: "debug",
      secure: false,
    })
  );
  // app.use(
  //   "/gateway",
  //   createProxyMiddleware({
  //     target: "https://m.maizuo.com",
  //     changeOrigin: true,
  //   })
  // );
};
