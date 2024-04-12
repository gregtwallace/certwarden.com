---
sidebar_position: 3
description: "This is Cert Warden's native integration with Cloudflare as a dns provider."
---

# dns-01 Cloudflare

Cert Warden has native support for Cloudflare as a DNS provider.

There are two options to configure Cloudflare. You can either create 
a scoped API Token or use a Global API Key.

## Configuration

As with all providers, domains that should use this provider must be 
specified. One wildcard provider can be configured with a sole 
domain of `*` which will be used if Cert Warden doesn't find a domain 
name on any other provider.

Then use the dropdown box to select one of the two below options.

### Scoped API Token

This is the preferred option as compromise of the token will only result in 
a partial compromise of the related account. Additionally, there is no reason
to give Cert Warden complete access to a Cloudflare account.

[How To Make a Token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/)

### Global API Key

This options involves using a Cloudflare account's global key which gives 
full and complete access to the account.

:::caution
Due to the breadth of access this key grants, it is **STRONGLY** recommended you 
**DO NOT** use this option.
:::

You will need to input the account's email address and API Key.

[How To Find Global API Key](https://developers.cloudflare.com/fundamentals/api/get-started/keys/)

