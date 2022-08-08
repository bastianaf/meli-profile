# MELI Profile API

## Description

<img align="right" width="150" height="150" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png" alt="meli logo" /></img>

This repository contains the source code of _MERCADO LIBRE PROFILE_ challenge

> El frontend debe tener una ruta /profile en la cuál se podrá visualizar información general del
usuario, un listado de sus compras, y se podrá acceder al detalle de cada una de estas.

## Installation

```bash
$ npm install
```
### Prerequisites  

- NodeJs `^14.0.0`

### Environment

Create an `.env` file on root of project or export the requiered environment variables, you can check for the required env vars on `.env.example` file

## Running the app

Run the following to start the app locally
```bash
# development watch mode
$ npm run dev

# production mode
$ npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## WEB

MELI PROFILE WEB expose this pages:

* Home
* User
* Purchases
* Purchase Details

>💡 Note: Remember that you need to attach a valid `x-api-key` to the header on each request. This is set as a minimum security layer


## Framework

<a href="http://nextjs.com/" target="blank"><img align="left" width="100" height="100" src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" alt="Nest Logo" /></a>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<br>

___

<right> _Author:_ [@bastianaf](https://github.com/bastiaf)</right>


