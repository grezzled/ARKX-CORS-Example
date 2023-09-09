const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const target = 'http://localhost:5000'; 


const proxy = createProxyMiddleware({
  target,
  changeOrigin: true,
});

app.use('*',(req,res,next)=>{
  console.log('[PROXY] New Request goes through proxy')
  next()
})

app.use('/', proxy);

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
