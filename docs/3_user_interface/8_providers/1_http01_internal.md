---
sidebar_position: 1
description: 'LeGo internal http challenge server.'
---

# http-01 Internal Server

This provider is LeGo's internal http server that provides http-01 
challenge responses.

As with all providers, domains that should use this provider must be 
specified. One wildcard provider can be configured with a sole 
domain of `*` which will be used if LeGo doesn't find a domain 
name on any other provider.

The only other configuration option is what port to run the server 
on. Responses MUST be served from port 80 but if the LeGo server is 
behind a NAT the port can be forwarded to any internal port, so long 
as the external port is 80.
