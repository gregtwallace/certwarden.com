---
sidebar_position: 2
description: 'acme.sh is a shell script that supports dozens of dns providers.'
---

# dns-01 acme.sh

This dns method provides dns challenge solving for dozens of dns 
providers, and is therefore one of the most likely to be the 
provider used if you want to use dns-01.

:::warning
The integration method of acme.sh into Cert Warden is less than ideal and sometimes
does not work as expected. It is strongly recommended that you use
[go-acme le-go](/docs/user_interface/providers/dns01_go_acme_le_go)
instead, if your DNS provider is supported there.
:::

[acme.sh](https://github.com/acmesh-official/acme.sh) is an ACME shell 
script that provides a full implementation of ACME (RFC8555). Cert Warden 
ignores the bulk of the code and leverages acme.sh simply for its wide 
breadth of dns provider support.

:::warning
acme.sh does not work if the server is running on Windows. A full list 
of supported OSes is [here](https://github.com/acmesh-official/acme.sh#tested-os).
:::

acme.sh natively supports the DNS record API of 
[dozens of DNS providers](https://github.com/acmesh-official/acme.sh/wiki/dnsapi). 
Cert Warden leverages this power to use acme.sh to create dns records on any 
of the supported providers. Doing this allows the use of dns-01 
challenge solving on any of these providers without having to code 
support of each into Cert Warden.

## Configuration

As with all providers, domains that should use this provider must be 
specified. One wildcard provider can be configured with a sole 
domain of `*` which will be used if Cert Warden doesn't find a domain 
name on any other provider.

### Path to acme.sh Install

This variable is the path where the acme.sh script and its dns 
components are unpacked. By default, acme.sh is bundled with release 
and located at `./scripts/acme.sh`.

### DNS Hook Name

Hook name is used to specify the specific dns provider you use. To 
get the correct one go 
[here](https://github.com/acmesh-official/acme.sh/wiki/dnsapi), 
select your provider, and locate the acme.sh command to issue a 
certificate (the section `To issue a cert:`). The hook name is 
the value after the `--dns` flag.

For example, the provider cyon.ch lists its command as 
`./acme.sh --issue --dns dns_cyon -d example.com -d *.example.com` 
so the hook name is `dns_cyon`.

### Environment Variables

Environment variables are generally used to authenticate access 
to your dns provider. To know what variables you need, again go 
[here](https://github.com/acmesh-official/acme.sh/wiki/dnsapi), 
select your provider, but then locate the section listing `export` 
items.

Each `export` is an environment variable. Specify each required 
environment variable with data pertinent to your environment. For
example, continuing with cyon.ch, the variables would be:

- `CY_Username=your_cyon_username`
- `CY_Password=your_cyon_password`
- `CY_OTP_Secret=your_otp_secret # Only required if using 2FA`

:::tip
The format for each environment variable must be the variable 
name, equals sign, and the variable value (e.g. `variable_name=1234`) 
Do NOT include the word 'export'.
:::

![Environment Variables Example](/img/screenshots/provider_environment_variables.png)
