---
sidebar_position: 4
description: 'For unsupported dns providers, a script option is available.'
---

# dns-01 Manual Script

LeGo provides access to dozens of DNS providers via integration of acme.sh
and go-acme/le-go. However, it isn't possible to support every single
provider.

## Configuration

As with all providers, domains that should use this provider must be
specified. One wildcard provider can be configured with a sole
domain of `*` which will be used if LeGo doesn't find a domain
name on any other provider.

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
:::

![Environment Variables Example](/img/screenshots/provider_environment_variables.png)

### Script Paths

The create script is called to add a dns record. The delete script is
called to clean up (remove) the record after the challenge is complete.

The paths can be relative or absolute.

Scripts are called with two arguments. The first is the requested DNS
record name (e.g. `_acme-challenge.www.example.com`). The second is the
record value (e.g. `XKrxpRBosdIKFzxW_CT3KLZNf6q0HG9i01zxXp5CPBs`).

:::tip
All LeGo releases are bundled with example scripts for reference. These
scripts log the arguments and environment variables so you can see how this
process works before writing your own script.
:::
