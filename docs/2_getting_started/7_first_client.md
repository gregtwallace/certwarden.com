---
sidebar_position: 7
description: 'Using the first certificate.'
---

# First Client

Once the Cert Warden server is secure and the first certificate is
generated for an endpoint, it is time to make that endpoint use
the shiny new certificate.

## Basic Retrieval

### Keys

Keys can be retrieved using:

`GET https://certwarden.example.com/legocerthub/api/v1/download/privatekeys/[Name]`

The header `X-API-Key` must be set to the value of the key's
API key. The API key can be viewed when clicking on a key in
the Web UI. `[Name]` should be replaced with the `Name` field
for the key as set in Cert Warden.

The key is returned in pem format.

### Certificates

Certificates can be retrieved using:

`GET https://certwarden.example.com/legocerthub/api/v1/download/certificates/[Name]`

The header `X-API-Key` must be set to the value of the certificate's
API key. The API key can be viewed when clicking on a certificate in
the Web UI. `[Name]` should be replaced with the `Name` field for the
certificate as set in Cert Warden.

The certificate is returned in pem format.

## Automation & Advanced Usage

There are a number of ways to automate the usage and update of certificates
that Cert Warden issues.

These options include writing scripts on the client devices (the
devices that actually use the certificates), installing the Cert Warden Client
docker container on the client, and having the Cert Warden server run
a post processing script or binary.

For many more details and possibilities related to client usage, please see
[Using Certificates](/docs/using_certificates).
