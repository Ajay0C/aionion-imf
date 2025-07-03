# InsuranceShield Static Site

This is a static, client-only version of the InsuranceShield website. All server-side code has been removed. The site is ready for deployment to any static host (such as Hostinger).

## How to Deploy

1. Build the site:
   ```sh
   cd client
   npm install
   npm run build
   ```
2. Upload the contents of `client/dist/` to your Hostinger `public_html` directory.

## Notes
- All data is loaded from static files or hardcoded in the client.
- No server or API endpoints are required.
- The `server/` folder is not needed for deployment.
