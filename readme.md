# Bux.ph Checkout API

> Use With Thriftshop Site as a Serverless Function

## Requirements
- netlify-cli
- postman

## Development
- [ ] Clone this Repo

```sh
git clone https://github.com/goldcoders/bux.ph-checkout
cd  bux.ph-checkout
```

- [ ] Edit ENV: `cp .env.example .env anad edit .env`

- [ ] Install Any NPM Dependencies type: `yarn`

- [ ] Run Local Server: `netlify dev`

- [ ] open postman and set url to `http://localhost:8888/api` method: ***POST***

- [ ] Add Raw JSON

```json
{
    "amount": 1234,
    "description": "GOLDCODERS CORP. - MERCHANT CHECKOUT VIA BUX.PH ",
    "email": "test@goldcoders.dev"
    "contact": "9111111111",
    "name": "Hugo Dusk"
}
```

- [ ] Click Send, Receive the Response

<details>
  <summary>Response JSON</summary>

```json
{"status":"success","id":7576,"uid":"c40d23d18bf94acaa1ba06f339792a7b"}
```

- uid: can be use to generate link 
- production checkout link: `https://bux.ph/checkout/c40d23d18bf94acaa1ba06f339792a7b`
- test checkout link: `https://bux.ph/test/checkout/c40d23d18bf94acaa1ba06f339792a7b`

</details>

## 1 Click Install For Production

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/goldcoders/bux.ph-checkout)

## Deploy on One Specific Site URL in Production

- Go to [Settings](https://app.netlify.com/sites/tss-test/settings/general)

- Click Change Site Name `bux.ph-checkout.${yourdomain}.com`

## Production

- make post request with Needed *payload* to `bux.ph-checkout.${domain}.com/api`

