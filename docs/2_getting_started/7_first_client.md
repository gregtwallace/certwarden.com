---
sidebar_position: 7
description: 'Using the first certificate.'
---

# First Client

Once the LeGo server is secure and the first certificate is
generated for an endpoint, it is time to make that endpoint use
the shiny new certificate.

## Basic Retrieval

### Keys

Keys can be retrieved using:

`GET https://legoserver.example.com/legocerthub/api/v1/download/privatekeys/:name` 

The header `X-API-Key` must be set to the value of the key's 
API key. The API key can be viewed when clicking on a key in 
the Web UI. `:name` should be replaced with the `Name` field 
for the key as set in LeGo.

The key is returned in pem format.

### Certificates

Certificates can be retrieved using:

`GET https://legoserver.example.com/legocerthub/api/v1/download/certificates/:name`  

The header `X-API-Key` must be set to the value of the certificate's 
API key. The API key can be viewed when clicking on a certificate in 
the Web UI. `:name` should be replaced with the `Name` field for the
certificate as set in LeGo.

The certificate is returned in pem format.

## Automation

Clients should regularly retrieve the certificate and/or key 
from LeGo to ensure they have the most recent versions. When 
new versions are detected, the client should install them.

Examples of **scripts** that perform these actions are available 
[here](https://github.com/gregtwallace/certificate-scripts).

## Advanced Usage

For full details and possibilities for retrieving keys and 
certificates from LeGo please review 
[Using Certificates](/docs/certificate_usage).
