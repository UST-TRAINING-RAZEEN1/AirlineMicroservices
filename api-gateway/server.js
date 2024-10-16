const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3003;

app.use('/airline', createProxyMiddleware({ target: 'http://airline-company-microservice:3000', changeOrigin: true }));
app.use('/flight', createProxyMiddleware({ target: 'http://flight-microservice:3001', changeOrigin: true }));
app.use('/passenger', createProxyMiddleware({ target: 'http://passenger-microservice:3002', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});