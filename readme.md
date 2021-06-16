# Bux.ph Direct Api

> Use With Thriftshop Site as a Serverless Function

## Requirements
- netlify-cli
- postman

## Development
- [ ] Clone this Repo

```sh
git clone https://github.com/goldcoders/bux.ph-generate-code
cd  bux.ph-generate-code
```

- [ ] Edit ENV: `cp .env.example .env anad edit .env`

- [ ] Install Any NPM Dependencies type: `yarn`

- [ ] Run Local Server: `netlify dev`

- [ ] open postman and set url to `http://localhost:8888/api` method: ***POST***

- [ ] Add Raw JSON

```json
{
    "amount": 555,
    "description": "generate code",
    "email": "test@gmail.com",
    "contact": "9155609040",
    "name": "uriah",
    "channel": "CARD"
    // Channel types is listed on channels.ts
}}
```

- [ ] Click Send, Receive the Response

<details>
  <summary>Response JSON</summary>

```json
{
"status":"success",
"id":7604,
"ref_code":"9921-1680-0036",
"image_url":"https://bux-api-prd-storage.s3.amazonaws.com/media/barcodes/9921-1680-0036.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYFTIVUQLPJG42SNS%2F20210616%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20210616T162803Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef371334235ed44f0a52f40423fb703064a32cc7ce6230ee759cfadf1329fb1f",
"seller_name":"GOLDCODERS CORP",
"expiry":"Jun 17 2021, 02:28 AM",
"created":"Jun 17 2021, 12:28 AM",
"payment_url":null,
"link":"https://bux.ph/test/payment/441a7691c86f4605a51c4a539a48a646/",
"base_link":"https://bux.ph"
}
```

- image_url: qrcode that will be use by the payment gateway
- payment url: only available if we pay via card
- link: goest to redirect url , better we set redirect url to specific receipt or url to view receipt
</details>

## 1 Click Install For Production

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/goldcoders/bux.ph-genereate-code)

## Deploy on One Specific Site URL in Production

- Go to [Settings](https://app.netlify.com/sites/tss-test/settings/general)

- Click Change Site Name `bux.ph-generate-code.${yourdomain}.com`

## Production

- make post request with Needed *payload* to `bux.ph-generate-code.${domain}.com/api`

