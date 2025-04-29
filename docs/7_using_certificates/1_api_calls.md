---
sidebar_position: 1
description: 'How to use the API to retrieve and use keys and certificates.'
---

# API Calls

Certificate download API calls always return the most recent
Valid order. This ensures the newest certificate is always
available without having to change the API call.

To use a certificate the server must have both the private key and
certificate. There are currently 5 API calls that can be sent to
Cert Warden to retrieve these items in various combinations.

Currently all of these are returned in PEM format but this may
change in the future.

### Automation & Scripting

Cert Warden is intended to automate your PKI using ACME. Clients should
regularly retrieve their certificates and keys from Cert Warden to ensure
they have the most recent versions. When new versions are
detected, the client should install them.

Examples of **scripts** that perform these actions using the
below API calls are available
[here](https://github.com/gregtwallace/certificate-scripts).
These might not have the best error handling but they are a
good starting point.

:::tip
Ensure you thoroughly test your scripts. Try things like running
your scripts with the wrong API keys, while the Cert Warden server is
down, etc. A poortly written script running during an unexpected
condition could potentially take the service using the certificate
down or worse.
:::

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

`GET https://certwarden.example.com/certwarden/api/v1/download/privatekeys/[Name]`

(Header) `X-API-Key: [API Key]`

or **Legacy Client**:

`GET https://certwarden.example.com/certwarden/api/v1/download/privatekeys/[Name]/[API Key]`

Returns the pem formatted private key. Replace `[Name]` with the
Name of the private key in Cert Warden.

Legacy: Replace `[API Key]` with the API key.

## GET Certificate

`GET https://certwarden.example.com/certwarden/api/v1/download/certificates/[Name]`

(Header) `X-API-Key: [API Key]`

or **Legacy Client**:

`GET https://certwarden.example.com/certwarden/api/v1/download/certificates/[Name]/[API Key]`

Returns the pem formatted certificate, **including** its
certificate chain. Replace `[Name]` with the Name of the
certificate in Cert Warden.

Legacy: Replace `[API Key]` with the API key.

## GET Combined Key & Certificate (with Chain)

`GET https://certwarden.example.com/certwarden/api/v1/download/privatecertchains/[Name]`

(Header) `X-API-Key: [API Key]`

or **Legacy Client**:

`GET https://certwarden.example.com/certwarden/api/v1/download/privatecertchains/[Name]/[API Key]`

:::info
Since this call combines two items with different API keys, a
special API key format is needed. The API key value for both
regular and legacy clients is `[cert API key].[key API key]`.
For example `certAPI123.keyAPIabc`.
:::

Returns the pem formatted key concatenated with the certificate and
the certificate's chain. `[Name]` should be the name
of the **certificate** (not the key). Cert Warden will deduce the proper
key from the certificate name.

Legacy: Replace `[API Key]` with the API key.

## GET PKCS#12 ("PFX"/"P12") (with Certificate, Chain and Private Key)

`GET https://certwarden.example.com/certwarden/api/v1/download/pfx/[Name]`

(Header) `X-API-Key: [API Key]`

or **Legacy Client**:

`GET https://certwarden.example.com/certwarden/api/v1/download/pfx/[Name]/[API Key]`

:::info
Since this call combines two items with different API keys, a
special API key format is needed. The API key value for both
regular and legacy clients is `[cert API key].[key API key]`.
For example `certAPI123.keyAPIabc`. The password for unlocking
the private key of the resulting file is the API key for the 
private key.
:::

:::tip
By default, the modern PKCS#12 variant is returned (which uses AES
encryption). Certain legacy systems are not comaptible. If you need
the legacy, deprecated, format, include `?3des` in your API call.
You should take additional steps to secure your file system since
the encryption is weaker.
:::

Returns the PKCS#12 formatted cert, key and chain. `[Name]` should 
be the name of the **certificate** (not the key). Cert Warden will 
deduce the proper key from the certificate name.

Legacy: Replace `[API Key]` with the API key.


## GET Combined Key & Certificate (without Chain)

`GET https://certwarden.example.com/certwarden/api/v1/download/privatecerts/[Name]`

(Header) `X-API-Key: [API Key]`

or **Legacy Client**:

`GET https://certwarden.example.com/certwarden/api/v1/download/privatecerts/[Name]/[API Key]`

:::info
Since this call combines two items with different API keys, a
special API key format is needed. The API key value for both
regular and legacy clients is `[cert API key].[key API key]`.
For example `certAPI123.keyAPIabc`.
:::

Returns the pem formatted key concatenated with the certificate.
The certificate chain is not included. `[Name]` should be the name
of the **certificate** (not the key). Cert Warden will deduce the proper
key from the certificate name.

Legacy: Replace `[API Key]` with the API key.

## GET Certificate Chain

`GET https://certwarden.example.com/certwarden/api/v1/download/certrootchains/[Name]`

(Header) `X-API-Key: [API Key]`

or **Legacy Client**:

`GET https://certwarden.example.com/certwarden/api/v1/download/certrootchains/[Name]/[API Key]`

Returns the pem formatted certificate chain. It does **NOT**
include the actual certificate though. Replace `[Name]` with
the Name of the certificate in Cert Warden.

Legacy: Replace `[API Key]` with the API key.
