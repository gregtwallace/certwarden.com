---
sidebar_position: 4
description: "A plugin for OPNsense firewalls."
---

# OPNsense Plugin

The Cert Warden Client OPNsense Plugin is a plguin to fetch a key and
certificate from Cert Warden and to save them to an OPNsense firewall's
Trust Store for use.

It can be downloaded at https://github.com/gregtwallace/certwarden-opnsense.

## Installation

There is no repository available for this package, you must do a manual
installation.

First, [download the latest release](https://github.com/gregtwallace/certwarden-opnsense/releases).
The only file you need is the .pkg file (`os-cert-warden-client-x.y.z.pkg`,
where `x.y.z` is the version number). Then, copy the .pkg file to the firewall.
The final step is to run the command `pkg install os-cert-warden-client-x.y.z.pkg`
in the shell of the firewall.

## Configuration

Configuration of the plugin should be reasonably straightforward. Settings
are located in the firwall menu `Services > Cert Warden Client`. Each option
has help details within the firewall configuration page to explain its purpose.

![Cert Warden Client OPNsense Plugin Settings Page](/img/screenshots/plugins/client-opnsense-plugin.webp)

(The `Settings` page in v0.2.0.)

`Save` saves the `Settings` page.
`Update Cert` queries Cert Warden and performs an update if needed.
`Connection Test` verifies the plugin can reach the Cert Warden instance.
`Unlink Certificate` breaks the connection between Cert Warden and the
certificate it updates in the Trust Store. This is useful if you want to
delete the certificate for some reason.

:::tip
Ensure you `Save` before clicking `Update Cert`, otherwise the configuration
changes you made will not be used (the previous values will be used instead).
:::
