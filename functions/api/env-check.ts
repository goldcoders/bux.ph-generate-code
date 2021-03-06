require('dotenv').config()
const { BUX_API_KEY, BUX_BASE_URL, BUX_CLIENT_ID, SITE_DOMAIN,BUX_NOTIFY_URL,BUX_REDIRECT_URL } = process.env;

if (!BUX_API_KEY)
  throw new Error("SET BUX API KEY");

if (!BUX_BASE_URL)
  throw new Error("SET BUX BASE URL");
  
if (!BUX_CLIENT_ID)
  throw new Error("SET BUX CLIENT ID");
  
if (!SITE_DOMAIN)
throw new Error("SET SITE DOMAIN");

if (!BUX_NOTIFY_URL)
throw new Error("SET BUX_NOTIFY_URL");

if (!BUX_REDIRECT_URL )
throw new Error("SET BUX_REDIRECT_URL");

export { BUX_API_KEY, BUX_BASE_URL, BUX_CLIENT_ID, SITE_DOMAIN, BUX_NOTIFY_URL, BUX_REDIRECT_URL };

