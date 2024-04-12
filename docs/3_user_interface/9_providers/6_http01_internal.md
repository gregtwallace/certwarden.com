---
sidebar_position: 6
description: "This is Cert Warden's built-in http challenge server."
---

# http-01 Internal Server

This provider is Cert Warden's internal http server that provides http-01 
challenge responses.

## Configuration

As with all providers, domains that should use this provider must be
specified. One wildcard provider can be configured with a sole
domain of `*` which will be used if Cert Warden doesn't find a domain
name on any other provider.

### Port

The only other configuration option is what port to run the server 
on. The ACME spec requires http-01 responses to be served from port 
80 but if the Cert Warden server is behind a NAT the port can be forwarded 
to any internal port, so long as the external port is 80.

:::tip
Make sure your responses are being served publicly over http port 80.
:::
