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

The SDK throws `AxiosError` upon http errors for API requests.

You can read more about axios error handling [here](https://axios-http.com/docs/handling_errors).

You can get more data on the Ludex error using the following fields:

- `error.response.data.code`: The Ludex error code (HTTP code)
- `error.response.data.message`: Explanation of the Ludex error
