---
sidebar_position: 1
description: 'acme-dns is a simplified dns server that limits access to your main dns provider.'
---

# dns-01 acme-dns

[acme-dns](https://github.com/joohoi/acme-dns) is a simplified DNS
server that allows limited access to your DNS provider to update ACME
DNS records. This allows minimization of the attack surface in the
event of a compromise.

Setup of acme-dns is outside of the scope of this document and LeGo
support in general.

## Configuration

Once you configure acme-dns, you can add the acme-dns server as a
provider in LeGo.

As with all providers, domains that should use this provider must be
specified. One wildcard provider can be configured with a sole
domain of `*` which will be used if LeGo doesn't find a domain
name on any other provider.

### ACME DNS Server Address

This is the URL to access your acme-dns server (e.g.
https://myacmedns.example.com:8880).

### ACME DNS Resources

acme-dns configuration involves creating a resource for each domain
you intend to validate. You must input information about every 
resource you want LeGo to use.

:::tip
The format for each environment variable must be the variable
name, equals sign, and the variable value (e.g. `variable_name=1234`)
Do NOT include the word 'export'.
Do NOT include quotes around the variable value.
:::

![ACME DNS Config](/img/screenshots/provider_acme_dns.png)
