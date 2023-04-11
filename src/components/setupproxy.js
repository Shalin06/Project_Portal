import { createProxyMiddleware } from 'http-proxy-middleware';
export default function(app) {
    app.use(
      '/send-email',
      createProxyMiddleware({
        target: 'https://api.sendgrid.com',
        changeOrigin: true,
      })
    );
  };