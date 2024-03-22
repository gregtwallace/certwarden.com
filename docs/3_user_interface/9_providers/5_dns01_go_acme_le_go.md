---
sidebar_position: 5
description: 'go-acme/le-go is a Go library that provides access to dozens of DNS providers.'
---

# dns-01 go-acme le-go

This dns method provides dns challenge solving for dozens of dns 
providers, and is therefore one of the most likely to be the 
provider used if you want to use dns-01.

[go-acme le-go](https://github.com/go-acme/lego) is a Go library
that provides a full implementation of ACME (RFC8555). LeGo ignores
the bulk of the code and leverages go-acme le-go simply for its wide
breadth of dns provider support.

go-acme le-go natively supports the DNS record API of
[dozens of DNS providers](https://go-acme.github.io/lego/dns/).
LeGo leverages this power to use go-acme le-go to create dns records on any
of the supported providers. Doing this allows the use of dns-01
challenge solving on any of these providers without having to code
support of each into LeGo.

:::warning
go-acme le-go will make dns queries to a wide variety of dns servers
as it tries to find the root servers for domains. If you're experiencing
confusing errors, ensure your dns queries aren't being blocked or otherwise
tampered with on your network.
:::

## Configuration

As with all providers, domains that should use this provider must be
specified. One wildcard provider can be configured with a sole
domain of `*` which will be used if LeGo doesn't find a domain
name on any other provider.

### Provider's CLI flag name (aka Code)

The primary config option for this provider is the 'Code'. [Look up
the Code for your specific dns provider.](https://go-acme.github.io/lego/dns/)
(e.g. 'cloudflare').

### Environment Variables

Environment variables are generally used to authenticate access
to your dns provider. To know what variables you need, again go
[here](https://go-acme.github.io/lego/dns/),
select your provider, but then review the tables listing `Environment
Variable Name`s and add the ones you need.

:::tip
The format for each environment variable must be the variable
name, equals sign, and the variable value (e.g. `variable_name=1234`)
Do NOT include the word 'export'.
Do NOT include quotes around the variable value.
:::

![Environment Variables Example](/img/screenshots/provider_environment_variables.png)
