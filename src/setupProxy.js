const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/encrypt", { target: "http://localhost:7000", changeOrigin :true }));

    app.use(createProxyMiddleware("/api/WatchoSubscription/GetAvilableSubscriptionPlanDetails", { target: "https://beta-ottapis.dishtv.in", changeOrigin :true }));
};