## The Official Javascript & Typescript SDK for Ludex API

[![Build](https://github.com/Ludex-Labs/ludex-sdk-js/actions/workflows/build.yml/badge.svg)](https://github.com/Ludex-Labs/ludex-sdk-js/actions/workflows/build.yml)

### About

This repository contains the official Javascript & Typescript SDK for the Ludex API.
For usage and documentation head over to our [official documentation](https://docs.ludex.gg/ludex-sdks/javascript-sdk).

## v1 Deprecation

v1 is being deprecated as now we will be doing everything via api's from now on.

## Usage

#### Before You Begin

Make sure you have the credentials for Ludex API Services.

Organization Api key for organization scoped API's

Client Api key for client scoped API's

For further information on how to get api keys checkout our [docs](https://docs.ludex.gg/dashboard/get-your-api-keys)

#### Requirements

- [Node.js](https://nodejs.org) v16 or higher.

#### Installation

`npm install @ludex-labs/ludex-sdk-js --save`

or

`yarn add @ludex-labs/ludex-sdk-js`

#### Importing Ludex SDK

JavaScript:

```javascript
const Ludex = require("@ludex-labs/ludex-sdk-js").Ludex;
const organizationScoped = new Ludex.OrganizationScoped(organizationApiKey);

const clientScoped = new Ludex.ClientScoped(clientApiKey);
```

TypeScript:

```typescript
import { Ludex } from "@ludex-labs/ludex-sdk-js";
const organizationScoped = new Ludex.OrganizationScoped(organizationApiKey);

const clientScoped = new Ludex.ClientScoped(clientApiKey);
```

You can also pass additional options for axios:

```typescript
const organizationScoped = new Ludex.OrganizationScoped(
  organizationApiKey,
  options
);

const clientScoped = new Ludex.ClientScoped(clientApiKey, options);
```

The `options` argument has the following structure:

```typescript
interface AxiosOptions {
  /** Base url instead of api.ludex */
  baseUrl?: string;
  /** HTTP request timeout */
  timeoutInMs?: number;
  /** Proxy configurations */
  proxy?: AxiosProxyConfig | false;
  /** Whether to remove platform from User-Agent header */
  anonymousPlatform?: boolean;
  /** Additional product identifier to be prepended to the User-Agent header */
  userAgent?: string;
  /** Providing custom axios options including a response interceptor (https://axios-http.com/docs/interceptors) */
  customAxiosOptions?: {
    interceptors?: {
      response?: {
        onFulfilled: (
          value: AxiosResponse<any, any>
        ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>;
        onRejected: (error: any) => any;
      };
    };
  };
}
```

#### Axios Interceptor

You can provide the sdk options with an [axios response interceptor](https://axios-http.com/docs/interceptors):

```ts
new Ludex.OrganizationScoped(organizationApiKey, {
  customAxiosOptions: {
    interceptors: {
      response: {
        onFulfilled: (response) => {
          return response;
        },
        onRejected: (error) => {
          throw error;
        },
      },
    },
  },
});
```

#### Error Handling

The SDK throws `AxiosError` upon http errors for API requests and `ZodError` when there is an issue with the data types received from the SDK methods.

The SDK exposes `AxiosError` type and `ZodError` type to facilitate error handling. For example, If you want to handle both types of errors together, you can do so as follows:

```ts
import { Ludex, AxiosError, ZodError } from "@ludex-labs/ludex-sdk-js";

try {
  const ludexClientApi = new Ludex.ClientScoped(clientApiKey);
  const challengeId = 1;
  const response = await ludexClientApi.challenge.getChallenge(challengeId);
  const challenge = response.data;
} catch(error) {
  if (error instanceof AxiosError) {
    console.error('HTTP error status:', error.response?.status);
    /* you can extract more data from AxiosError using the following fields */
    console.error('HTTP error code:', error.response.data.code);
    console.error('Explanation of the error:', error.response.data.message);

  } else if (error instanceof ZodError) {
    console.error('Validation error details:', error.errors);
  } else if (error instanceof Error) {
    console.error('Unexpected error:', error.message);
  }
}
```

You can read more about axios error handling [here](https://axios-http.com/docs/handling_errors) and zod error handling [here](https://zod.dev/?id=error-handling).

#### Response Handling

The SDK returns an [AxiosResponse](https://axios-http.com/docs/res_schema) upon successful API requests.

```json
{
  "data": {},
  "status": 200,
  "statusText": "OK",
  "headers": {},
  "config": {},
  "request": {}
}
```

For example, to get a challenge you can do the following:

```ts
import { Ludex } from "@ludex-labs/ludex-sdk-js";
const ludexClientApi = new Ludex.ClientScoped(clientApiKey);
const challengeId = 1;
const response = await ludexClientApi.challenge.getChallenge(challengeId);
const challenge = response.data;
```

The challenge object should have the following structure:

```json
{
  "id": 1,
  "limit": 2,
  "state": "LOCKED",
  "blockchainAddress": "0x000000",
  "payout": {
    "id": 1,
    "entryFee": 3000000,
    "mediatorRake": 100000,
    "providerRake": 200000,
    "chain": "SOLANA",
    "uiValues": {
      "entryFee": 0.003,
      "mediatorRake": 0.0001,
      "providerRake": 0.0002
    }
  },
  "players": ["0x000000", "0x000000"]
}
```

#### Using TypeScript Enums

The SDK exposes several TypeScript enums to enhance type safety and help users provide correct values when interacting with the SDK. Below are the available enums:

```ts
import {
  Ludex,
  Chain,
  PayoutType,
  PayoutState,
  Environment,
  ChallengeState,
  RedeemType,
} from "@ludex-labs/ludex-sdk-js";

const ludexClientApi = new Ludex.ClientScoped(clientApiKey);
const filter = {
  environment: Environment.DEVNET,
  state: ChallengeState.CREATED,
  type: PayoutType.NATIVE,
  chain: Chain.AVALANCHE,
}
const response = await ludexClientApi.challenge.getChallenges(filter);
const challenge = response.data;
```