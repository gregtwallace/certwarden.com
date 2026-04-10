---
sidebar_position: 7
description: 'For using persistent DNS records, outside of Cert Warden&apos;s control.'
---

# dns-persist-01 Manual

The `dns-persist-01` challenge type is a relatively new one as of 2026. It allows users
to create persistent DNS records with their DNS provider for domain validation. This
eliminates the need to store sensitive API credentials on Cert Warden.

As such, for this provider, Cert Warden takes no special actions regarding your DNS
records. It simply assumes the necessary record(s) exist and tells your ACME Service
Provider to attempt to validate your DNS configuration.

:::note
If challenge validation fails, it is almost certainly an issue between your ACME Service
and your DNS records. Cert Warden doesn't really "do" anything for this provider.
:::

## Configuration (Cert Warden)

As with all providers, domains that should use this provider must be
specified. One wildcard provider can be configured with a sole
domain of `*` which will be used if Cert Warden doesn't find a domain
name on any other provider.

## Configuration (Your DNS Provider)

As the challenge name implies, you must provision, and leave provisioned, a DNS record
that your ACME Server deems acceptable. This may be slightly ambiguous as the specification
for this challenge type is still in draft format.

That said, the only provider I know of that currently offers any support is Let&apos;s
Encrypt. You can read their blog post (which includes the DNS record format)
[here](https://letsencrypt.org/2026/02/18/dns-persist-01).
