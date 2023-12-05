---
sidebar_position: 7
description: 'How to retrieve and use keys and certificates.'
---

# Using Certificates

Certificate download API calls always return the most recent 
Valid order. This ensures the newest certificate is always 
available without having to change the API call.

To use a certificate the server must have both the private key and 
certificate. There are currently 4 API calls that can be sent to 
LeGo to retrieve these items in various combinations.

Currently all of these are returned in PEM format but this may 
change in the future.

### Automation

LeGo is intended to automate your PKI using ACME. Clients should 
regularly retrieve their certificates and keys from LeGo to ensure 
they have the most recent versions. When new versions are 
detected, the client should install them.

Examples of **scripts** that perform these actions using the 
below API calls are available 
[here](https://github.com/gregtwallace/certificate-scripts). 
These might not have the best error handling but they are a 
good starting point.

### Legacy Clients

:::warning
There is a legacy client mode which should only be used in the 
event a client can't set a custom request header.
:::

Additionally, each of these calls can be made with the API 
key inlined in the URL. This is generally considered a security 
risk and strongly discouraged unless specifically needed (for 
example, an appliance that can't set a custom API key header).

To use this less secure method, the specific keys and certificates 
must each have the `Allow API Key via URL (for Legacy Clients)` 
option enabled.

## GET Private Key

`GET https://lego.example.com/legocerthub/api/v1/download/privatekeys/:name`

(Header) `X-API-Key: [API Key]`

or **Legacy Client**:

`GET https://lego.example.com/legocerthub/api/v1/download/privatekeys/:name/*apiKey`

Returns the pem formatted private key. Replace `:name` with the 
Name of the private key in LeGo. 

Legacy: Replace `*apiKey` with the API key.

## GET Certificate

`GET https://lego.example.com/legocerthub/api/v1/download/certificates/:name`

(Header) `X-API-Key: [API Key]`

or **Legacy Client**:

`GET https://lego.example.com/legocerthub/api/v1/download/certificates/:name/*apiKey`

Returns the pem formatted certificate, **including** its 
certificate chain. Replace `:name` with the Name of the 
certificate in LeGo. 

Legacy: Replace `*apiKey` with the API key.

## GET Combined Key & Certificate

`GET https://lego.example.com/legocerthub/api/v1/download/privatecerts/:name`

(Header) `X-API-Key: [API Key]`

or **Legacy Client**:

`GET https://lego.example.com/legocerthub/api/v1/download/privatecerts/:name/*apiKey`

:::info
Since this call combines two items with different API keys, a 
special API key format is needed. The API key value for both 
regular and legacy clients is `[cert API key].[key API key]`. 
For example `certAPI123.keyAPIabc`.
:::

Returns the pem formatted key, certificate, and certificate 
chain, all in one. `:name` should be the name of the 
**certificate** (not the key). LeGo will deduce the proper 
key from the certificate name.

Legacy: Replace `*apiKey` with the API key.

## GET Certificate Chain

`GET https://lego.example.com/legocerthub/api/v1/download/certrootchains/:name`

(Header) `X-API-Key: [API Key]`

or **Legacy Client**:

`GET https://lego.example.com/legocerthub/api/v1/download/certrootchains/:name/*apiKey`

Returns the pem formatted certificate chain. It does **NOT** 
include the actual certificate though. Replace `:name` with 
the Name of the certificate in LeGo.

Legacy: Replace `*apiKey` with the API key.
